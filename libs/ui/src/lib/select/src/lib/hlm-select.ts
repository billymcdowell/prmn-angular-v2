import { Directive } from '@angular/core';
import { classes } from '@billy_mcdowell/prmn-angular-v2/utils';

@Directive({
	selector: 'hlm-select, brn-select [hlm]',
})
export class HlmSelect {
	constructor() {
		classes(() => 'space-y-2');
	}
}
