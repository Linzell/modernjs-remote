import { createModuleFederationConfig } from '@module-federation/modern-js';
export default createModuleFederationConfig({
  name: 'host',
  remotes: {
    remote: 'remote@http://172.19.0.4:3051/mf-manifest.json',
    nested_remote: 'nested_remote@http://172.19.0.6:3052/mf-manifest.json',
  },
  shared: {
    react: { singleton: true },
    'react-dom': { singleton: true },
  },
});
