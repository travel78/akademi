import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DestroyRef,
  effect,
  inject,
  input,
  OnInit,
  signal
} from '@angular/core';
import {HtmlInputType} from '@app/innterfaces-types';
import {ControlValueAccessor, FormsModule, NgControl, Validators} from '@angular/forms';
import {distinctUntilChanged} from 'rxjs';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {FormErrorMessagePipe} from '@app/pipes';


@Component({
  selector: 'app-input',
  standalone: true,
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
  host: {'class': 'flex flex-col'},
  imports: [FormsModule, FormErrorMessagePipe],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputComponent implements ControlValueAccessor, OnInit {
  readonly destroy: DestroyRef = inject(DestroyRef);
  readonly type = input<HtmlInputType>('text');
  readonly label = input<string>();
  readonly errorMessages = input<Record<string, string>>();
  readonly value = signal<string | undefined>('');
  private _onChange!: (value: string | undefined) => void;
  private _onTouched!: () => void;
  disabled = false;
  isRequired = false;

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

  writeValue(obj: unknown): void {
    this.value.set(obj as string);
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
