// optimize-images.js
const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const inputDir = "src/assets";
const targetWidth = 180;
const targetHeight = 180;

fs.readdirSync(inputDir).forEach((file) => {
  const ext = path.extname(file).toLowerCase();
  const base = path.basename(file, ext);
  const fullPath = path.join(inputDir, file);

  if ([".png", ".jpg", ".jpeg"].includes(ext)) {
    sharp(fullPath)
      .resize(targetWidth, targetHeight, { fit: "cover" })
      .toFormat("webp", { quality: 80 })
      .toFile(path.join(inputDir, `${base}.webp`))
      .then(() => {
        fs.unlinkSync(fullPath); // ❌ elimina el original
        console.log(`✅ ${file} → ${base}.webp`);
      })
      .catch((err) => console.error(`❌ Error en ${file}:`, err));
  }
});
