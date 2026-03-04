import { Directive } from '@angular/core';
import { classes } from '@billy_mcdowell/prmn-angular-v2/utils';

@Directive({
	selector: '[hlmDropdownMenuSeparator],hlm-dropdown-menu-separator',
	host: {
		'data-slot': 'dropdown-menu-separator',
	},
})
export class HlmDropdownMenuSeparator {
	constructor() {
		classes(() => 'bg-border -mx-1 my-1 block h-px');
	}
}
