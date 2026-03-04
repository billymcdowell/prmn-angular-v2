import { Directive } from '@angular/core';
import { classes } from '@billy_mcdowell/prmn-angular-v2/utils';

@Directive({
	selector: '[hlmEmptyContent],hlm-empty-content',
	host: {
		'data-slot': 'empty-content',
	},
})
export class HlmEmptyContent {
	constructor() {
		classes(() => 'flex w-full max-w-sm min-w-0 flex-col items-center gap-4 text-sm text-balance');
	}
}
