import { Directive } from '@angular/core';
import { classes } from '@billy_mcdowell/prmn-angular-v2/utils';

@Directive({
	selector: '[hlmSidebarContent],hlm-sidebar-content',
	host: {
		'data-slot': 'sidebar-content',
		'data-sidebar': 'content',
	},
})
export class HlmSidebarContent {
	constructor() {
		classes(() => 'flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden');
	}
}
