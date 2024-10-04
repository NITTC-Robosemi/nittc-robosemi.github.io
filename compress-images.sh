#!/bin/bash

# Check current directory
if [ ! -d "public/assets" ]; then
  echo "public/assets directory not found. Please run this script in the root of the workspace"
  exit 1
fi

if ! command -v cwebp &> /dev/null; then
  echo "cwebp command not found. Please install the WebP package."
  echo "On Ubuntu: sudo apt install webp"
  exit 1
fi

# Loop through all image files in the directory
for img in public/assets/*.{jpg,jpeg,png,JPG,JPEG,PNG} public/assets/**/*.{jpg,jpeg,png,JPG,JPEG,PNG}; do
  # Check if the file is an image
  if [ -f "$img" ]; then
    cwebp -q 80 "$img" -o "${img%.*}.webp"
    rm "$img"
  fi
done

echo "Image compression completed."
