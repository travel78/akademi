import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DestroyRef,
  effect,
  inject,
  input,
  model,
  OnInit
} from '@angular/core';
import {ControlValueAccessor, FormsModule, NgControl, Validators} from '@angular/forms';
import {distinctUntilChanged} from 'rxjs';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {FormErrorMessagePipe} from '@app/pipes';



@Component({
  selector: 'app-textarea',
  standalone: true,
  templateUrl: './textarea.component.html',
  styleUrl: './textarea.component.scss',
  host: {'class': 'flex flex-col'},
    imports: [FormsModule, FormErrorMessagePipe],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TextareaComponent implements ControlValueAccessor, OnInit {
  readonly destroy: DestroyRef = inject(DestroyRef);
  readonly label = input<string>();
  readonly value = model<string | undefined>();
  readonly errorMessages = input<Record<string, string>>({});
  private _onChange!: (value: string | undefined) => void;
  private _onTouched!: () => void;
  disabled: boolean = false;
  isRequired: boolean = false;

  constructor(protected control: NgControl, protected cd: ChangeDetectorRef) {
    this.control.valueAccessor = this;
    effect(() => this._onChange(this.value()));
  }

  ngOnInit(): void {
    this.control.statusChanges
      ?.pipe(
        distinctUntilChanged(),
        takeUntilDestroyed(this.destroy)
      )
      .subscribe(() => {
        this.isRequired = Boolean(this.control.control?.hasValidator(Validators.required));
        this.cd.markForCheck();
      })
  }

  writeValue(obj: any): void {
    this.value.set(obj);
  }

  registerOnChange(fn: (value: string | undefined) => void): void {
    this._onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this._onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  onTouched() {
    this._onTouched();
  }
}
