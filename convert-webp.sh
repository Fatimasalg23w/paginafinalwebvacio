#!/bin/bash

INPUT_DIR="./public"
OUTPUT_DIR="./public/webp"

mkdir -p "$OUTPUT_DIR"

for file in "$INPUT_DIR"/*.png; do
  [ -e "$file" ] || continue
  filename=$(basename "$file")
  base="${filename%.*}"
  cwebp -q 80 "$file" -o "$OUTPUT_DIR/$base.webp"
  echo "✅ $filename → $base.webp"
done
