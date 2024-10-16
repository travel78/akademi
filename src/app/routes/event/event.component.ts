import { ChangeDetectionStrategy, Component } from '@angular/core';
import {HeaderComponent} from "@app/components";

@Component({
  selector: 'app-event',
  standalone: true,
    imports: [
        HeaderComponent
    ],
  templateUrl: './event.component.html',
  styleUrl: './event.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EventComponent {

}
