import { Directive } from '@angular/core';
import { classes } from '../../../utils/src/lib/hlm';

export const hlmLead = 'text-xl text-muted-foreground';

@Directive({
	selector: '[hlmLead]',
})
export class HlmLead {
	constructor() {
		classes(() => hlmLead);
	}
}
