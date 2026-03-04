import { Directive } from '@angular/core';
import { classes } from '@billy_mcdowell/prmn-angular-v2/utils';

@Directive({
	selector: '[hlmSidebarHeader],hlm-sidebar-header',
	host: {
		'data-slot': 'sidebar-header',
		'data-sidebar': 'header',
	},
})
export class HlmSidebarHeader {
	constructor() {
		classes(() => 'flex flex-col gap-2 p-2');
	}
}
