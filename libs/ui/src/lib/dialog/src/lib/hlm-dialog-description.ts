import { Directive } from '@angular/core';
import { BrnDialogDescription } from '@spartan-ng/brain/dialog';
import { classes } from '@billy_mcdowell/prmn-angular-v2/utils';

@Directive({
	selector: '[hlmDialogDescription]',
	hostDirectives: [BrnDialogDescription],
	host: {
		'data-slot': 'dialog-description',
	},
})
export class HlmDialogDescription {
	constructor() {
		classes(() => 'text-muted-foreground text-sm');
	}
}
