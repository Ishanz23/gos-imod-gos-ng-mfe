import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'imod-outgate-central-exceptions',
  exposes: {
    './Routes':
      'apps/imod-outgate-central-exceptions/src/app/remote-entry/entry.routes.ts',
  },
};

export default config;
