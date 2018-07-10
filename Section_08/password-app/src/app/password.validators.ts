import { AbstractControl, ValidationErrors } from "@angular/forms";

export class PasswordValidators {

    static check(c: AbstractControl): Promise<ValidationErrors | null> {
        return new Promise((resolve) => {
            setTimeout(() => {
                if (c.value !== '1234') resolve({ valid: true });
                else resolve(null);
            }, 2000);
        });
    }

    static match(control: AbstractControl) {
        let newPassword = control.get('newPassword');
        let confirmPassword = control.get('confirmPassword');        
        if (newPassword.value !== confirmPassword.value)
            return { match: true };        
        return null;
    }

}