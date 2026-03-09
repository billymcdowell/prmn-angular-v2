import { Directive, input } from '@angular/core';
import { HlmButton } from '../../../button/src/lib/hlm-button';
import { provideBrnButtonConfig } from '../../../button/src/lib/hlm-button.token';

@Directive({
	selector: 'button[hlmAlertDialogCancel]',
	providers: [provideBrnButtonConfig({ variant: 'outline' })],
	hostDirectives: [{ directive: HlmButton, inputs: ['variant', 'size'] }],
	host: {
		'[type]': 'type()',
	},
})
export class HlmAlertDialogCancel {
	public readonly type = input<'button' | 'submit' | 'reset'>('button');
}
