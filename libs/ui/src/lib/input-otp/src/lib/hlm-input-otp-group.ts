import { Directive } from '@angular/core';
import { classes } from '@billy_mcdowell/prmn-angular-v2/utils';

@Directive({
	selector: '[hlmInputOtpGroup]',
	host: {
		'data-slot': 'input-otp-group',
	},
})
export class HlmInputOtpGroup {
	constructor() {
		classes(() => 'flex items-center');
	}
}
