import { Directive } from '@angular/core';
import { classes } from '@billy_mcdowell/prmn-angular-v2/utils';

@Directive({
	selector: 'ul[hlmSidebarMenu]',
	host: {
		'data-slot': 'sidebar-menu',
		'data-sidebar': 'menu',
	},
})
export class HlmSidebarMenu {
	constructor() {
		classes(() => 'flex w-full min-w-0 flex-col gap-1');
	}
}
