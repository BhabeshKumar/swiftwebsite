#!/bin/bash

echo "🚀 SwiftAi Landing Page - Build Verification"
echo "=============================================="
echo ""

# Check if running
if ! curl -s http://localhost:3000 > /dev/null 2>&1; then
  echo "❌ Server not running on localhost:3000"
  echo "   Run 'npm run dev' first"
  exit 1
fi

echo "✅ Server is running"
echo ""

# Check key sections
sections=(
  "Build AI Systems That"
  "What We Build"
  "AI That Is Practical"
  "Our Process"
  "Real-World Use Cases"
  "Built Across Chat"
  "Technology Stack"
  "Get in Touch"
  "support@swiftai.live"
)

echo "📋 Checking sections:"
for section in "${sections[@]}"; do
  if curl -s http://localhost:3000 | grep -q "$section"; then
    echo "   ✅ $section"
  else
    echo "   ❌ $section"
  fi
done

echo ""
echo "📊 Page statistics:"
echo "   Title: $(curl -s http://localhost:3000 | grep -oP '(?<=<title>)[^<]*')"
echo "   Description: $(curl -s http://localhost:3000 | grep -oP 'name="description" content="\K[^"]*')"

echo ""
echo "✨ Build verification complete!"
