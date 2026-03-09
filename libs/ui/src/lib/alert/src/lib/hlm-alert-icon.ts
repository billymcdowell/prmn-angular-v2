import { Directive } from '@angular/core';
import { provideHlmIconConfig } from '../../../icon/src/lib/hlm-icon.token';

@Directive({
	selector: '[hlmAlertIcon]',
	providers: [provideHlmIconConfig({ size: 'sm' })],
})
export class HlmAlertIcon {}
