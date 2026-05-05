'use client'

import { useLayoutEffect, useRef, useCallback } from 'react'
import './ScrollStack.css'

// ── Types ───────────────────────────────────────────────────────────────────

export interface ScrollStackItemProps {
  children: React.ReactNode
  itemClassName?: string
}

export interface ScrollStackProps {
  children: React.ReactNode
  className?: string
  itemDistance?: number
  itemScale?: number
  itemStackDistance?: number
  stackPosition?: string | number
  scaleEndPosition?: string | number
  baseScale?: number
  rotationAmount?: number
  blurAmount?: number
  onStackComplete?: () => void
}

// ── ScrollStackItem ──────────────────────────────────────────────────────────

export const ScrollStackItem = ({ children, itemClassName = '' }: ScrollStackItemProps) => (
  <div className={`scroll-stack-card${itemClassName ? ` ${itemClassName}` : ''}`}>
    {children}
  </div>
)

// ── ScrollStack ──────────────────────────────────────────────────────────────
// Uses window scroll with position-caching so card transforms don't create
// a feedback loop with getBoundingClientRect(). Multiple instances safe.

const ScrollStack = ({
  children,
  className = '',
  itemDistance = 100,
  itemScale = 0.025,
  itemStackDistance = 20,
  stackPosition = '20%',
  scaleEndPosition = '8%',
  baseScale = 0.88,
  rotationAmount = 0,
  blurAmount = 0,
  onStackComplete,
}: ScrollStackProps) => {
  const containerRef       = useRef<HTMLDivElement>(null)
  const cardsRef           = useRef<HTMLElement[]>([])
  const cardTopCacheRef    = useRef<number[]>([])
  const endTopCacheRef     = useRef<number>(0)
  const lastTransformsRef  = useRef<Map<number, { translateY: number; scale: number }>>(new Map())
  const isUpdatingRef      = useRef(false)
  const stackCompletedRef  = useRef(false)
  const rafRef             = useRef<number | null>(null)

  // ── Helpers ──────────────────────────────────────────────────────────────

  const parsePercentage = useCallback((value: string | number, containerHeight: number) => {
    if (typeof value === 'string' && value.includes('%')) {
      return (parseFloat(value) / 100) * containerHeight
    }
    return parseFloat(value as string)
  }, [])

  const calcProgress = useCallback((scroll: number, start: number, end: number) => {
    if (scroll < start) return 0
    if (scroll > end)   return 1
    return (scroll - start) / (end - start)
  }, [])

  // Cache each card's document-top before any transforms are applied,
  // so subsequent scroll updates don't feed back through getBoundingClientRect.
  const cachePositions = useCallback(() => {
    const container = containerRef.current
    if (!container) return

    cardTopCacheRef.current = cardsRef.current.map(card => {
      const rect = card.getBoundingClientRect()
      return rect.top + window.scrollY
    })

    const endEl = container.querySelector('.scroll-stack-end')
    if (endEl) {
      endTopCacheRef.current = endEl.getBoundingClientRect().top + window.scrollY
    }
  }, [])

  // ── Core transform update ─────────────────────────────────────────────────

  const updateCardTransforms = useCallback(() => {
    if (!cardsRef.current.length || isUpdatingRef.current) return
    isUpdatingRef.current = true

    const scrollTop       = window.scrollY
    const viewH           = window.innerHeight
    const stackPx         = parsePercentage(stackPosition, viewH)
    const scaleEndPx      = parsePercentage(scaleEndPosition, viewH)
    const endElementTop   = endTopCacheRef.current

    cardsRef.current.forEach((card, i) => {
      const cardTop    = cardTopCacheRef.current[i] ?? 0
      const pinStart   = cardTop - stackPx - itemStackDistance * i
      const pinEnd     = endElementTop - viewH / 2
      const trigStart  = pinStart
      const trigEnd    = cardTop - scaleEndPx

      // Scale — cards behind get smaller
      const scaleProgress = calcProgress(scrollTop, trigStart, trigEnd)
      const targetScale   = baseScale + i * itemScale
      const scale         = 1 - scaleProgress * (1 - targetScale)

      // Rotation (optional)
      const rotation = rotationAmount ? i * rotationAmount * scaleProgress : 0

      // Blur (optional)
      let blur = 0
      if (blurAmount) {
        // Find topmost pinned card
        let topIdx = 0
        cardsRef.current.forEach((_, j) => {
          const jPinStart = (cardTopCacheRef.current[j] ?? 0) - stackPx - itemStackDistance * j
          if (scrollTop >= jPinStart) topIdx = j
        })
        const depth = topIdx - i
        if (depth > 0) blur = Math.max(0, depth * blurAmount)
      }

      // Translate — sticky pin offset
      let translateY = 0
      if (scrollTop >= pinStart && scrollTop <= pinEnd) {
        translateY = scrollTop - cardTop + stackPx + itemStackDistance * i
      } else if (scrollTop > pinEnd) {
        translateY = pinEnd - cardTop + stackPx + itemStackDistance * i
      }

      // Round to avoid sub-pixel jitter
      const ty = Math.round(translateY * 100) / 100
      const sc = Math.round(scale * 1000) / 1000

      const last = lastTransformsRef.current.get(i)
      const changed =
        !last ||
        Math.abs(last.translateY - ty) > 0.1 ||
        Math.abs(last.scale - sc) > 0.001

      if (changed) {
        card.style.transform = `translate3d(0,${ty}px,0) scale(${sc}) rotate(${rotation}deg)`
        card.style.filter    = blur > 0 ? `blur(${blur}px)` : ''
        lastTransformsRef.current.set(i, { translateY: ty, scale: sc })
      }

      // Stack-complete callback
      if (i === cardsRef.current.length - 1) {
        const pinned = scrollTop >= pinStart && scrollTop <= pinEnd
        if (pinned && !stackCompletedRef.current) {
          stackCompletedRef.current = true
          onStackComplete?.()
        } else if (!pinned && stackCompletedRef.current) {
          stackCompletedRef.current = false
        }
      }
    })

    isUpdatingRef.current = false
  }, [
    baseScale, blurAmount, calcProgress, itemScale, itemStackDistance,
    onStackComplete, parsePercentage, rotationAmount, scaleEndPosition, stackPosition,
  ])

  // ── Setup ────────────────────────────────────────────────────────────────

  useLayoutEffect(() => {
    const container = containerRef.current
    if (!container) return

    // Collect cards scoped to this instance
    const cards = Array.from(container.querySelectorAll<HTMLElement>('.scroll-stack-card'))
    cardsRef.current = cards
    const transformsCache = lastTransformsRef.current

    // Set initial per-card styles
    cards.forEach((card, i) => {
      if (i < cards.length - 1) card.style.marginBottom = `${itemDistance}px`
      card.style.willChange       = 'transform, filter'
      card.style.transformOrigin  = 'top center'
    })

    // Cache positions once before any transforms run
    cachePositions()

    // Scroll handler — RAF-throttled
    const onScroll = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      rafRef.current = requestAnimationFrame(updateCardTransforms)
    }

    // Re-cache on resize (viewport or layout changes)
    const onResize = () => {
      cachePositions()
      updateCardTransforms()
    }

    window.addEventListener('scroll', onScroll,  { passive: true })
    window.addEventListener('resize', onResize, { passive: true })

    updateCardTransforms() // Initial paint

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onResize)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      cardsRef.current = []
      transformsCache.clear()
      isUpdatingRef.current  = false
      stackCompletedRef.current = false
    }
  }, [cachePositions, itemDistance, updateCardTransforms])

  return (
    <div
      ref={containerRef}
      className={`scroll-stack-container${className ? ` ${className}` : ''}`}
    >
      {children}
      {/* Marks the release point for the last pin */}
      <div className="scroll-stack-end" />
    </div>
  )
}

export default ScrollStack
