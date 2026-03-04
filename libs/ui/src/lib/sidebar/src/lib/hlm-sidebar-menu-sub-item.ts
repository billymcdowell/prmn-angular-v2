import { Directive } from '@angular/core';
import { classes } from '@billy_mcdowell/prmn-angular-v2/utils';

@Directive({
	selector: 'li[hlmSidebarMenuSubItem]',
	host: {
		'data-slot': 'sidebar-menu-sub-item',
		'data-sidebar': 'menu-sub-item',
	},
})
export class HlmSidebarMenuSubItem {
	constructor() {
		classes(() => 'group/menu-sub-item relative');
	}
}
