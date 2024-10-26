import { createModuleFederationConfig } from '@module-federation/modern-js';
export default createModuleFederationConfig({
  name: 'host',
  remotes: {
    remote: `remote@${process.env.REMOTE_URL || 'http://localhost:3051'}/mf-manifest.json`,
    nested_remote: `nested_remote@${process.env.NESTED_REMOTE_URL || 'http://localhost:3052'}/mf-manifest.json`,
  },
  shared: {
    react: { singleton: true },
    'react-dom': { singleton: true },
  },
});
