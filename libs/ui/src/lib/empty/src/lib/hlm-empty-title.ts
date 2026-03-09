import { Directive } from '@angular/core';
import { classes } from '../../../utils/src/lib/hlm';

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
