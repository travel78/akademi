import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {CardComponent, HeaderComponent, HintComponent, InputComponent, TextareaComponent} from '@app/components';
import {NonNullableFormBuilder, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-new-teacher',
  standalone: true,
  imports: [
    HeaderComponent,
    CardComponent,
    InputComponent,
    HintComponent,
    ReactiveFormsModule,
    TextareaComponent
  ],
  templateUrl: './new-teacher.component.html',
  styleUrl: './new-teacher.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewTeacherComponent {
  readonly fb = inject(NonNullableFormBuilder);
  readonly form = this.fb.group({
    firstName: ['First name', {validators: [Validators.required, Validators.maxLength(5)]}],
    lastName: [null, {validators: [Validators.required, Validators.max(4)]}],
    email: [null, {validators: [Validators.required, Validators.email]}],
    phone: [null, {validators: [Validators.required, Validators.minLength(9)]}],
    birthDate: [null, {validators: [Validators.required]}],
    birthPlace: [null, {validators: [Validators.required, Validators.min(5)]}],
    address: [null, {validators: [Validators.required]}],
    university: [null, {validators: [Validators.required]}],
    degree: [null, {validators: [Validators.required]}],
    city: [null, {validators: [Validators.required]}],
  });

  onSubmit() {
    console.log(this.form.value);
  }
}
