import { appTools, defineConfig } from '@modern-js/app-tools';
import { moduleFederationPlugin } from '@module-federation/modern-js';

export default defineConfig({
  dev: {
    port: 3050,
  },
  runtime: {
    router: true,
  },
  server: {
    ssr: {
      mode: 'stream',
    },
    port: 8080,
  },
  plugins: [appTools(), moduleFederationPlugin()],
});
