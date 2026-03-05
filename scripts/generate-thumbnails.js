const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const inputDir = "public/artworks/originals";
const outputDir = "public/artworks/thumbs";

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

fs.readdirSync(inputDir).forEach(file => {
  sharp(path.join(inputDir, file))
    .resize(400)
    .toFile(path.join(outputDir, file))
    .then(() => console.log("Created thumbnail:", file))
    .catch(err => console.error(err));
});
