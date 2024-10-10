import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteImagemin from 'vite-plugin-imagemin';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteImagemin({
      optipng: {
        optimizationLevel: 7,
      },
      pngquant: {
        quality: [0.6, 0.8],
      },
      svgo: {
        plugins: [
          {
            name: 'removeViewBox',
          },
          {
            name: 'removeEmptyAttrs',
            active: false,
          },
        ],
      },
    }),
  ],
  assetsInclude: ['**/*.png'],  // Place assetsInclude outside plugins array
});
