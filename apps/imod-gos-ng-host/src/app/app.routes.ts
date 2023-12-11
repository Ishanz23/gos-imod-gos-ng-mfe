import { NxWelcomeComponent } from './nx-welcome.component';
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'imod-outgate-terminal-exceptions',
    loadChildren: () =>
      import('imod-outgate-terminal-exceptions/Routes').then(
        (m) => m.remoteRoutes
      ),
  },
  {
    path: 'imod-outgate-central-exceptions',
    loadChildren: () =>
      import('imod-outgate-central-exceptions/Routes').then(
        (m) => m.remoteRoutes
      ),
  },
  {
    path: '',
    component: NxWelcomeComponent,
  },
];
