import { Directive } from '@angular/core';
import { classes } from '@billy_mcdowell/prmn-angular-v2/utils';

@Directive({
	selector: '[hlmEmptyTitle]',
	host: {
		'data-slot': 'empty-title',
	},
})
export class HlmEmptyTitle {
	constructor() {
		classes(() => 'text-lg font-medium tracking-tight');
	}
}
