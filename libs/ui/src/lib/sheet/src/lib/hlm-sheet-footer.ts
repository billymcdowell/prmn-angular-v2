import { Directive } from '@angular/core';
import { classes } from '@billy_mcdowell/prmn-angular-v2/utils';

@Directive({
	selector: '[hlmSheetFooter],hlm-sheet-footer',
	host: {
		'data-slot': 'sheet-footer',
	},
})
export class HlmSheetFooter {
	constructor() {
		classes(() => 'mt-auto flex flex-col gap-2 p-4');
	}
}
