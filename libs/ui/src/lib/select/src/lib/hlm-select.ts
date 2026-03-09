import { Directive } from '@angular/core';
import { classes } from '../../../utils/src/lib/hlm';

@Directive({
	selector: 'hlm-select, brn-select [hlm]',
})
export class HlmSelect {
	constructor() {
		classes(() => 'space-y-2');
	}
}
