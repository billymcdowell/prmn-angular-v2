import { Directive } from '@angular/core';
import { classes } from '../../../utils/src/lib/hlm';

export const hlmLarge = 'text-lg font-semibold';

@Directive({
	selector: '[hlmLarge]',
})
export class HlmLarge {
	constructor() {
		classes(() => hlmLarge);
	}
}
