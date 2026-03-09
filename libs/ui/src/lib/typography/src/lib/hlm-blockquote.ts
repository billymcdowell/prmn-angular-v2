import { Directive } from '@angular/core';
import { classes } from '../../../utils/src/lib/hlm';

export const hlmBlockquote = 'mt-6 border-border border-l-2 pl-6 italic';

@Directive({
	selector: '[hlmBlockquote]',
})
export class HlmBlockquote {
	constructor() {
		classes(() => hlmBlockquote);
	}
}
