// CommonJS image optimizer: reads images in src/assets and writes optimized WebP + optimized originals to src/assets/optimized
// Run with: npm run optimize:images
const imagemin = require('imagemin').default;
const imageminWebp = require('imagemin-webp').default;
const imageminMozjpeg = require('imagemin-mozjpeg');
const imageminPngquant = require('imagemin-pngquant').default;
const fs = require('fs-extra');
const path = require('path');

function findImages(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  files.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && file !== 'optimized') {
      findImages(filePath, fileList);
    } else if (stat.isFile()) {
      const ext = path.extname(file).toLowerCase();
      if (['.png', '.jpg', '.jpeg'].includes(ext)) {
        fileList.push(filePath);
      }
    }
  });
  return fileList;
}

async function optimize() {
  const assetsDir = path.join(__dirname, '../src/assets');
  const outDir = path.join(__dirname, '../src/assets/optimized');

  await fs.ensureDir(outDir);

  const files = findImages(assetsDir);
  
  if (!files.length) {
    console.log('No images found to optimize.');
    console.log('Searched in:', assetsDir);
    return;
  }
  
  console.log(`Found ${files.length} images to optimize.`);

  for (const file of files) {
    const rel = path.relative(path.join(__dirname, '../src/assets'), file);
    const name = path.parse(rel).name;
    const subdir = path.dirname(rel);
    const destDir = path.join(outDir, subdir);
    await fs.ensureDir(destDir);

    try {
      // create WebP
      await imagemin([file], { destination: destDir, plugins: [imageminWebp({ quality: 80 })] });

      // create optimized original format (JPEG -> mozjpeg, PNG -> pngquant)
      const ext = path.extname(file).toLowerCase();
      if (ext === '.jpg' || ext === '.jpeg') {
        await imagemin([file], { destination: destDir, plugins: [imageminMozjpeg({ quality: 75 })] });
      } else if (ext === '.png') {
        await imagemin([file], { destination: destDir, plugins: [imageminPngquant({ quality: [0.65, 0.8] })] });
      } else {
        // fallback - copy file
        await fs.copy(file, path.join(destDir, path.basename(file)));
      }

      console.log(`Optimized ${rel} -> ${path.join('src/assets/optimized', subdir)}`);
    } catch (err) {
      console.error(`Failed to optimize ${rel}:`, err.message || err);
    }
  }

  console.log('Image optimization complete.');
}

optimize().catch((err) => {
  console.error(err);
  process.exit(1);
});
