import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Ensure public/assets directory exists
const publicAssetsDir = path.join(__dirname, 'public', 'assets');
if (!fs.existsSync(publicAssetsDir)) {
  fs.mkdirSync(publicAssetsDir, { recursive: true });
}

// Copy background images from src/assets to public/assets
const srcAssetsDir = path.join(__dirname, 'src', 'assets');
const backgroundImages = ['bg.jpg', 'bg1.jpg', 'bg2.jpg', 'bg3.jpg'];

backgroundImages.forEach(image => {
  const srcPath = path.join(srcAssetsDir, image);
  const destPath = path.join(publicAssetsDir, image);
  
  if (fs.existsSync(srcPath)) {
    fs.copyFileSync(srcPath, destPath);
    console.log(`Copied ${image} to public/assets/`);
  }
});

console.log('Assets copied successfully!');
