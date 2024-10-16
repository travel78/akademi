import {ChangeDetectionStrategy, Component, input} from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
  host: {'class': 'block rounded-2xl overflow-hidden'},
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent {
  title = input();
  protected readonly input = input;
}
