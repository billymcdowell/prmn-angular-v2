import { Directive } from '@angular/core';
import { classes } from '@billy_mcdowell/prmn-angular-v2/utils';

@Directive({
	selector: '[hlmItemActions],hlm-item-actions',
	host: {
		'data-slot': 'item-actions',
	},
})
export class HlmItemActions {
	constructor() {
		classes(() => 'flex items-center gap-2');
	}
}
