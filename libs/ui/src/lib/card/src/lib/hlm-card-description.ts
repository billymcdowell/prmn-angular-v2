import { Directive } from '@angular/core';
import { classes } from '@billy_mcdowell/prmn-angular-v2/utils';

@Directive({
	selector: '[hlmCardDescription]',
	host: {
		'data-slot': 'card-description',
	},
})
export class HlmCardDescription {
	constructor() {
		classes(() => 'text-muted-foreground text-sm');
	}
}
