import { Directive } from '@angular/core';
import { classes } from '@billy_mcdowell/prmn-angular-v2/utils';

@Directive({
	selector: '[hlmItemFooter],hlm-item-footer',
	host: {
		'data-slot': 'item-footer',
	},
})
export class HlmItemFooter {
	constructor() {
		classes(() => 'flex basis-full items-center justify-between gap-2');
	}
}
