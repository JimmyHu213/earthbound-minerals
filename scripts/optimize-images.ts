import sharp from "sharp";
import { readdir } from "node:fs/promises";
import { join, dirname, extname, basename } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const INPUT_DIR = join(__dirname, "../src/assets/images");
const MAX_WIDTH = 1920;
const QUALITY = 80;

async function optimize() {
  const files = await readdir(INPUT_DIR);
  const pngs = files.filter((f) => extname(f).toLowerCase() === ".png");

  for (const file of pngs) {
    const inputPath = join(INPUT_DIR, file);
    const outputName = basename(file, ".png") + ".webp";
    const outputPath = join(INPUT_DIR, outputName);

    const image = sharp(inputPath);
    const metadata = await image.metadata();

    const pipeline =
      metadata.width && metadata.width > MAX_WIDTH
        ? image.resize(MAX_WIDTH)
        : image;

    await pipeline.webp({ quality: QUALITY }).toFile(outputPath);

    const { size: origSize } = await sharp(inputPath).metadata();
    const { size: newSize } = await sharp(outputPath).metadata();

    console.log(
      `${file} → ${outputName}  (${fmt(origSize)} → ${fmt(newSize)})`
    );
  }

  console.log("\nDone! You can now remove the original .png files.");
}

function fmt(bytes?: number): string {
  if (!bytes) return "??";
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(0)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

optimize().catch(console.error);
