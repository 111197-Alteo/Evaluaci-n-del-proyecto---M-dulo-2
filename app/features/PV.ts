import {
    Directive,
    forwardRef
} from '@angular/core';

import {
    AbstractControl,
    NG_VALIDATORS,
    Validator
} from '@angular/forms';

@Directive({
    selector: '[min-length-custom]',
    providers: [
        {
            provide: NG_VALIDATORS,
            useExisting: forwardRef(
                () => MinLengthDirective
            ),
            multi: true
        }
    ]
})
export class MinLengthDirective implements Validator {

    validate(control: AbstractControl) {

        const value = control.value || '';

        if (value.length > 0 && value.length < 2) {
            return {
                minLengthCustom: true
            };
        }

        return null;
    }
}
