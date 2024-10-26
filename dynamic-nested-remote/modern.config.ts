import { appTools, defineConfig } from '@modern-js/app-tools';
import { moduleFederationPlugin } from '@module-federation/modern-js';

// https://modernjs.dev/en/configure/app/usage
export default defineConfig({
  dev: {
    port: 3054,
  },
  runtime: {
    router: true,
    state: true,
  },
  source: {
    moduleScopes: [/^@mf-types/],
  },
  server: {
    ssr: {
      mode: 'stream',
    },
    port: 8080,
  },
  plugins: [appTools(), moduleFederationPlugin()],
});
