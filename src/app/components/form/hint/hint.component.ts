import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-hint',
  standalone: true,
  imports: [],
  templateUrl: './hint.component.html',
  styleUrl: './hint.component.scss',
  host: {'class': 'block'},
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HintComponent {

}
