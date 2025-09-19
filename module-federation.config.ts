// module-federation.config.ts
import { createModuleFederationConfig } from '@module-federation/sdk';

export default createModuleFederationConfig({
  name: 'shell',
  remotes: {
    auth: 'nextLogin@http://localhost:3002/remoteEntry.js',
  },
  shared: {
    react: { singleton: true, eager: true, requiredVersion: false },
    'react-dom': { singleton: true, eager: true, requiredVersion: false },
  },
});
