const esbuild = require('esbuild');

const isWatch = process.argv.includes('--watch');
const isProduction = process.argv.includes('--production');

/** @type {import('esbuild').BuildOptions} */
const buildOptions = {
  entryPoints: ['src/extension.ts'],
  bundle: true,
  outfile: 'dist/extension.js',
  external: ['vscode'], // vscode 模块由宿主提供，不打包
  format: 'cjs',
  platform: 'node',
  target: 'ES2020',
  sourcemap: !isProduction,
  minify: isProduction,
};

async function main() {
  if (isWatch) {
    // 监听模式
    const ctx = await esbuild.context(buildOptions);
    await ctx.watch();
    console.log('[esbuild] 监听模式已启动...');
  } else {
    // 单次构建
    await esbuild.build(buildOptions);
    console.log('[esbuild] 构建完成');
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
