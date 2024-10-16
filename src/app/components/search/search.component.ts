import {ChangeDetectionStrategy, Component, input} from '@angular/core';
import {SvgIconComponent} from '@app/components';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {debounceTime, distinctUntilChanged} from 'rxjs';
import {outputFromObservable} from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [
    SvgIconComponent,
    ReactiveFormsModule
  ],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
  host: {
    class: 'flex gap-x-4 bg-custom-white h-15 rounded-full overflow-hidden px-8 items-center',
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchComponent {
  readonly placeholder = input('Search here...');
  readonly control = new FormControl();
  search = outputFromObservable(
    this.control.valueChanges
      .pipe(
        debounceTime(500),
        distinctUntilChanged()
      )
  )
}
