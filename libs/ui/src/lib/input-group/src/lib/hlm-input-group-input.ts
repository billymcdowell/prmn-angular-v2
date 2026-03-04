import { Directive } from '@angular/core';
import { HlmInput } from '@billy_mcdowell/prmn-angular-v2/input';
import { classes } from '@billy_mcdowell/prmn-angular-v2/utils';

@Directive({
	selector: 'input[hlmInputGroupInput]',
	hostDirectives: [HlmInput],
	host: {
		'data-slot': 'input-group-control',
	},
})
export class HlmInputGroupInput {
	constructor() {
		classes(() => `flex-1 rounded-none border-0 bg-transparent shadow-none focus-visible:ring-0 dark:bg-transparent`);
	}
}
