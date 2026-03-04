import { Directive } from '@angular/core';
import { classes } from '@billy_mcdowell/prmn-angular-v2/utils';

@Directive({
	selector: 'li[hlmPaginationItem]',
	host: {
		'data-slot': 'pagination-item',
	},
})
export class HlmPaginationItem {
	constructor() {
		classes(() => '');
	}
}
