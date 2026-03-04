import { Directive } from '@angular/core';
import { classes } from '@billy_mcdowell/prmn-angular-v2/utils';

@Directive({
	selector: '[hlmBreadcrumbList]',
})
export class HlmBreadcrumbList {
	constructor() {
		classes(() => 'text-muted-foreground flex flex-wrap items-center gap-1.5 text-sm break-words sm:gap-2.5');
	}
}
