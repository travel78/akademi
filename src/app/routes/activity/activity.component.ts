import { ChangeDetectionStrategy, Component } from '@angular/core';
import {HeaderComponent} from "@app/components";

@Component({
  selector: 'app-activity',
  standalone: true,
    imports: [
        HeaderComponent
    ],
  templateUrl: './activity.component.html',
  styleUrl: './activity.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ActivityComponent {

}
