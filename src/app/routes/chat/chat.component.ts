import { ChangeDetectionStrategy, Component } from '@angular/core';
import {HeaderComponent} from "@app/components";

@Component({
  selector: 'app-chat',
  standalone: true,
    imports: [
        HeaderComponent
    ],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChatComponent {

}
