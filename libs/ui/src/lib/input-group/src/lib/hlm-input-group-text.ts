import { Directive } from '@angular/core';
import { classes } from '@billy_mcdowell/prmn-angular-v2/utils';

@Directive({
	selector: 'span[hlmInputGroupText]',
})
export class HlmInputGroupText {
	constructor() {
		classes(
			() =>
				`text-muted-foreground flex items-center gap-2 text-sm [&_ng-icon]:pointer-events-none [&_ng-icon:not([class*='text-'])]:text-base`,
		);
	}
}
