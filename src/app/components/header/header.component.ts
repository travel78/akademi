import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  host: {'class': 'flex items-center'},
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  readonly route = inject(ActivatedRoute);
  readonly label = this.route.snapshot.data['label'];
}
