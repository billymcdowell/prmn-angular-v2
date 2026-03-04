import { Directive } from '@angular/core';
import { classes } from '@billy_mcdowell/prmn-angular-v2/utils';

@Directive({
	selector: '[hlmAlertDesc],[hlmAlertDescription]',
})
export class HlmAlertDescription {
	constructor() {
		classes(() => 'text-muted-foreground col-start-2 grid justify-items-start gap-1 text-sm [&_p]:leading-relaxed');
	}
}
