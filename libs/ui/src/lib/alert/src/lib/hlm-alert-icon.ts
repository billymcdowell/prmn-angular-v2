import { Directive } from '@angular/core';
import { provideHlmIconConfig } from '@billy_mcdowell/prmn-angular-v2/icon';

@Directive({
	selector: '[hlmAlertIcon]',
	providers: [provideHlmIconConfig({ size: 'sm' })],
})
export class HlmAlertIcon {}
