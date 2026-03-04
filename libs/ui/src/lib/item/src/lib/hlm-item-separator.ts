import { Directive } from '@angular/core';
import { BrnSeparator } from '@spartan-ng/brain/separator';
import { hlmSeparatorClass } from '@billy_mcdowell/prmn-angular-v2/separator';
import { classes } from '@billy_mcdowell/prmn-angular-v2/utils';
@Directive({
	selector: 'div[hlmItemSeparator]',
	hostDirectives: [{ directive: BrnSeparator, inputs: ['orientation'] }],
	host: { 'data-slot': 'item-separator' },
})
export class HlmItemSeparator {
	constructor() {
		classes(() => [hlmSeparatorClass, 'my-0']);
	}
}
