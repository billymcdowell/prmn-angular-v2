import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideChevronDown } from '@ng-icons/lucide';
import { HlmIcon } from '@billy_mcdowell/prmn-angular-v2/icon';
import { classes } from '@billy_mcdowell/prmn-angular-v2/utils';

@Component({
	selector: 'hlm-select-scroll-down',
	imports: [NgIcon, HlmIcon],
	providers: [provideIcons({ lucideChevronDown })],
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `
		<ng-icon hlm size="sm" class="ml-2" name="lucideChevronDown" />
	`,
})
export class HlmSelectScrollDown {
	constructor() {
		classes(() => 'flex cursor-default items-center justify-center py-1');
	}
}
