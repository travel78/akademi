import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormErrorMessageService {

  getErrors() {
    return {
      maxlength: 'Expected length is less than #requiredLength',
      minlength: 'Expected length is no more than #requiredLength',
      required: 'This field is mandatory',
      email: 'Invalid email'
    };
  }
}
