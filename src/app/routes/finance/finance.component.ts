import { ChangeDetectionStrategy, Component } from '@angular/core';
import {HeaderComponent} from "@app/components";

@Component({
  selector: 'app-finance',
  standalone: true,
    imports: [
        HeaderComponent
    ],
  templateUrl: './finance.component.html',
  styleUrl: './finance.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FinanceComponent {

}
