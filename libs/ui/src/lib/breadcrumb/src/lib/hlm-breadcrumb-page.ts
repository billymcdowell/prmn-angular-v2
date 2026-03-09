import { Directive } from '@angular/core';
import { classes } from '../../../utils/src/lib/hlm';

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
