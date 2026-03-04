import { Directive } from '@angular/core';
import { classes } from '@billy_mcdowell/prmn-angular-v2/utils';

@Directive({
	selector: 'kbd[hlmKbdGroup]',
	host: {
		'data-slot': 'kbd-group',
	},
})
export class HlmKbdGroup {
	constructor() {
		classes(() => 'inline-flex items-center gap-1');
	}
}
