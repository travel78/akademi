import {ChangeDetectionStrategy, Component, OnDestroy} from '@angular/core';
import {HeaderComponent} from '@app/components';

@Component({
  selector: 'app-food',
  standalone: true,
  imports: [
    HeaderComponent
  ],
  templateUrl: './food.component.html',
  styleUrl: './food.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FoodComponent implements OnDestroy {
  ngOnDestroy(): void {
    console.log('ngOnDestroy FoodComponent');
  }

}
