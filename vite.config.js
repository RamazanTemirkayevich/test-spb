import { defineConfig } from 'vite';
import viteImagemin from 'vite-plugin-imagemin';
import htmlMinifier from 'vite-plugin-html-minifier';

export default defineConfig({
  root: './',
  build: {
    outDir: 'dist',
  },
  plugins: [
    htmlMinifier({
      collapseWhitespace: true,
      removeComments: true,
      minifyJS: true,
      minifyCSS: true,
    }),
    viteImagemin({
      gifsicle: { optimizationLevel: 7 },
      optipng: { optimizationLevel: 7 },
      mozjpeg: { quality: 75 },
      svgo: {
        plugins: [{ name: 'removeViewBox' }, { name: 'removeEmptyAttrs', active: false }],
      },
    }),
  ],
});