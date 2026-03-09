import { Directive } from '@angular/core';
import { classes } from '../../../utils/src/lib/hlm';

export const hlmSmall = 'text-sm font-medium leading-none';

@Directive({
	selector: '[hlmSmall]',
})
export class HlmSmall {
	constructor() {
		classes(() => hlmSmall);
	}
}
