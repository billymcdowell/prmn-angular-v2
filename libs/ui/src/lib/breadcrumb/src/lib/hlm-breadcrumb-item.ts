import { Directive } from '@angular/core';
import { classes } from '@billy_mcdowell/prmn-angular-v2/utils';

@Directive({
	selector: '[hlmBreadcrumbItem]',
})
export class HlmBreadcrumbItem {
	constructor() {
		classes(() => 'inline-flex items-center gap-1.5');
	}
}
