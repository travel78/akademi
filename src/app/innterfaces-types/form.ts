import {ValidationErrors} from '@angular/forms';

export interface IFormError extends ValidationErrors {
  minlength?: { actualLength: number; requiredLength: number; };
  maxlength?: { actualLength: number; requiredLength: number; };
  max?: { actual: number; max: number; };
  min?: { actual: number; min: number; };
}

