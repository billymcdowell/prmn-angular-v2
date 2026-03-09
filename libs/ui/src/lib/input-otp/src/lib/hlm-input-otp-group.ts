import { Directive } from '@angular/core';
import { classes } from '../../../utils/src/lib/hlm';

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
