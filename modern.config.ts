// modern.config.ts
import { appTools, defineConfig } from '@modern-js/app-tools';
import moduleFederationPlugin from '@module-federation/modern-js';

export default defineConfig({
  runtime: {
    router: true,
  },
  source: {
    entries: {
      main: './src/mfe/index.tsx',
    },
  },
  plugins: [
    appTools({
      bundler: 'webpack',
    }),
    moduleFederationPlugin(), // <-- tells Modern.js to use module-federation.config.ts
  ],
});
