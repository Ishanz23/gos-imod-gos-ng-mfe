import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NxWelcomeComponent } from './nx-welcome.component';

@Component({
  standalone: true,
  imports: [CommonModule, NxWelcomeComponent],
  selector: 'gos-imod-gos-ng-mfe-imod-outgate-terminal-exceptions-entry',
  template: `<gos-imod-gos-ng-mfe-nx-welcome></gos-imod-gos-ng-mfe-nx-welcome>`,
})
export class RemoteEntryComponent {}
