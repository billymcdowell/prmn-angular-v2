import { Directive } from '@angular/core';
import { HlmTextarea } from '@billy_mcdowell/prmn-angular-v2/textarea';
import { classes } from '@billy_mcdowell/prmn-angular-v2/utils';

@Directive({
	selector: 'textarea[hlmInputGroupTextarea]',
	hostDirectives: [HlmTextarea],
	host: {
		'data-slot': 'input-group-control',
	},
})
export class HlmInputGroupTextarea {
	constructor() {
		classes(
			() =>
				'flex-1 resize-none rounded-none border-0 bg-transparent py-3 shadow-none focus-visible:ring-0 dark:bg-transparent',
		);
	}
}
