import { Directive } from '@angular/core';
import { classes } from '@billy_mcdowell/prmn-angular-v2/utils';

@Directive({
	selector: '[hlmCommandEmpty]',
	host: {
		'data-slot': 'command-empty',
	},
})
export class HlmCommandEmpty {
	constructor() {
		classes(() => 'py-6 text-center text-sm');
	}
}
