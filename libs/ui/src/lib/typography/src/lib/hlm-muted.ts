import { Directive } from '@angular/core';
import { classes } from '../../../utils/src/lib/hlm';

export const hlmMuted = 'text-sm text-muted-foreground';

@Directive({
	selector: '[hlmMuted]',
})
export class HlmMuted {
	constructor() {
		classes(() => hlmMuted);
	}
}
