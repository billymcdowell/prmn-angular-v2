import { Directive, input } from '@angular/core';
import { HlmButton } from '@billy_mcdowell/prmn-angular-v2/button';

@Directive({
	selector: 'button[hlmAlertDialogAction]',
	hostDirectives: [{ directive: HlmButton, inputs: ['variant', 'size'] }],
	host: {
		'[type]': 'type()',
	},
})
export class HlmAlertDialogAction {
	public readonly type = input<'button' | 'submit' | 'reset'>('button');
}
