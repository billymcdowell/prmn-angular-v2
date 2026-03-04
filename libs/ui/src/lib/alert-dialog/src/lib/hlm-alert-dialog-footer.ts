import { Directive } from '@angular/core';
import { classes } from '@billy_mcdowell/prmn-angular-v2/utils';

@Directive({
	selector: '[hlmAlertDialogFooter],hlm-alert-dialog-footer',
	host: {
		'data-slot': 'alert-dialog-footer',
	},
})
export class HlmAlertDialogFooter {
	constructor() {
		classes(() => 'flex flex-col-reverse gap-2 sm:flex-row sm:justify-end');
	}
}
