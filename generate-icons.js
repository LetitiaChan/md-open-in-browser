const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

// 定义需要生成的各尺寸 icon
const sizes = [
  { size: 16, name: 'icon-16.png' },
  { size: 32, name: 'icon-32.png' },
  { size: 48, name: 'icon-48.png' },
  { size: 64, name: 'icon-64.png' },
  { size: 128, name: 'icon-128.png' },  // VS Code Marketplace 标准尺寸
  { size: 256, name: 'icon-256.png' },   // 高分辨率
  { size: 512, name: 'icon-512.png' },   // 超高分辨率
];

const sourceIcon = path.join(__dirname, 'icon.jpg');
const outputDir = path.join(__dirname, 'icons');

async function generateIcons() {
  // 创建输出目录
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  console.log(`源文件: ${sourceIcon}`);

  // 获取源图片信息
  const metadata = await sharp(sourceIcon).metadata();
  console.log(`源图片尺寸: ${metadata.width}x${metadata.height}`);
  console.log('---');

  // 生成各尺寸
  for (const { size, name } of sizes) {
    const outputPath = path.join(outputDir, name);
    await sharp(sourceIcon)
      .resize(size, size, {
        fit: 'cover',      // 裁剪填充，保证正方形
        position: 'center'  // 居中裁剪
      })
      .png()
      .toFile(outputPath);
    
    console.log(`✅ 已生成: ${name} (${size}x${size})`);
  }

  // 同时生成根目录的 icon.png（128x128，供 package.json 使用）
  const rootIconPath = path.join(__dirname, 'icon.png');
  await sharp(sourceIcon)
    .resize(128, 128, {
      fit: 'cover',
      position: 'center'
    })
    .png()
    .toFile(rootIconPath);
  
  console.log(`✅ 已生成: icon.png (128x128) -> 项目根目录`);
  console.log('---');
  console.log('🎉 所有尺寸 icon 生成完成！');
}

generateIcons().catch(err => {
  console.error('生成失败:', err);
  process.exit(1);
});
