import { Directive } from '@angular/core';
import { classes } from '@billy_mcdowell/prmn-angular-v2/utils';

@Directive({
	selector: 'ul[hlmPaginationContent]',
	host: {
		'data-slot': 'pagination-content',
	},
})
export class HlmPaginationContent {
	constructor() {
		classes(() => 'flex flex-row items-center gap-1');
	}
}
