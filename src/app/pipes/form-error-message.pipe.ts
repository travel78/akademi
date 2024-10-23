import {inject, Pipe, PipeTransform} from '@angular/core';
import {IFormError} from '@app/innterfaces-types';
import {FormErrorMessageService} from '@app/services';

@Pipe({
  name: 'formErrorMessage',
  standalone: true
})
export class FormErrorMessagePipe implements PipeTransform {
  readonly errorsService = inject(FormErrorMessageService);

  transform(value: IFormError, alternativeMessages?: Record<string, string>): string {
    const firstKey: keyof IFormError = Object.keys(value)[0];
    const errors: Record<string, string> = this.errorsService.getErrors();
    if (alternativeMessages && Object.hasOwn(alternativeMessages, firstKey)) {
      return alternativeMessages[firstKey];
    }
    switch (firstKey) {
      case 'minlength' :
        const minRequiredLength = String(value[firstKey]?.requiredLength);
        return errors['minlength']?.replace('#requiredLength', minRequiredLength);
      case 'maxlength' :
        const maxRequiredLength = String(value[firstKey]?.requiredLength);
        return errors['maxlength']?.replace('#requiredLength', maxRequiredLength);
      default:
        return errors[firstKey] || 'Error message not found';
    }
  }
}
