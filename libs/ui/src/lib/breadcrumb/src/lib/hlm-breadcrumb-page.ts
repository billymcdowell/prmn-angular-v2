import { Directive } from '@angular/core';
import { classes } from '@billy_mcdowell/prmn-angular-v2/utils';

@Directive({
	selector: '[hlmBreadcrumbPage]',
	host: {
		role: 'link',
		'aria-disabled': 'true',
		'aria-current': 'page',
	},
})
export class HlmBreadcrumbPage {
	constructor() {
		classes(() => 'text-foreground font-normal');
	}
}
