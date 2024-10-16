import { ChangeDetectionStrategy, Component } from '@angular/core';
import {HeaderComponent, SearchComponent, UserMenuComponent} from "@app/components";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    HeaderComponent,
    UserMenuComponent,
    SearchComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent {
}
