import axios from 'axios';
import sharp from 'sharp';
import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const downloadAndOptimizeImages = async () => {
  const profilesPath = path.join(dirname(__dirname), 'public', 'images', 'profiles');
  
  // Create directory if it doesn't exist
  if (!fs.existsSync(profilesPath)) {
    fs.mkdirSync(profilesPath, { recursive: true });
  }

  // Use placeholder images for development
  for (let i = 1; i <= 15; i++) {
    const imagePath = path.join(profilesPath, `girl${i}.jpg`);
    const response = await axios.get('https://source.unsplash.com/400x600/?portrait', { responseType: 'arraybuffer' });
    
    await sharp(response.data)
      .resize(400, 600, { fit: 'cover' })
      .jpeg({ quality: 80 })
      .toFile(imagePath);
  }
};

downloadAndOptimizeImages();