import { Directive } from '@angular/core';
import { classes } from '@billy_mcdowell/prmn-angular-v2/utils';

@Directive({
	selector: '[hlmItemGroup],hlm-item-group',
	host: { 'data-slot': 'item-group' },
})
export class HlmItemGroup {
	constructor() {
		classes(() => 'group/item-group flex flex-col');
	}
}
