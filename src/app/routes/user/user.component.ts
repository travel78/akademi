import { ChangeDetectionStrategy, Component } from '@angular/core';
import {HeaderComponent} from "@app/components";

@Component({
  selector: 'app-user',
  standalone: true,
    imports: [
        HeaderComponent
    ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserComponent {

}
