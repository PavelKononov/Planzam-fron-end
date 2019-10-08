import {AbstractControl} from '@angular/forms';

export class CustomValidators {
    public static Match(firstControlName, secondControlName) {
        return (AC: AbstractControl) => {
            const firstControlValue = AC.get(firstControlName).value;
            const secondControlValue = AC.get(secondControlName).value;

            if (firstControlValue != secondControlValue) {
                AC.get(secondControlName).setErrors({MatchFields: true});
            } else {
                return null;
            }
        };
    }

    public static numberValidator(number): null | { invalidNumber: boolean } {
        if (number.pristine) {
            return null;
        }

        const NUMBER_REGEXP = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g;

        number.markAsTouched();

        if (NUMBER_REGEXP.test(number.value)) {
            return null;
        }

        return {
            invalidNumber: true
        };
    }

    public static isOverTimeRequestLesson(selectDate) {
        return (c: AbstractControl) => {
            const splitDate = c.value.split(':');
            const date = new Date(selectDate.value);

            date.setHours(splitDate[0]);
            date.setMinutes(splitDate[1]);

            const timeDiff: number = date.getTime() - new Date().getTime();

            return timeDiff > 0 ? null : {isOverTime: true};
        };
    }

    public static isOverDateRequestLesson() {
        return (c: AbstractControl) => {
            const date = new Date(c.value);
            const timeDiff: number = date.getTime() - new Date().getTime();

            return timeDiff > 0 ? null : {isOverTime: true};
        };
    }
}
