import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'imod-outgate-terminal-exceptions',
  exposes: {
    './Routes':
      'apps/imod-outgate-terminal-exceptions/src/app/remote-entry/entry.routes.ts',
  },
};

export default config;
