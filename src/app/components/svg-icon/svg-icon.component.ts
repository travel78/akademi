import { ChangeDetectionStrategy, ChangeDetectorRef, Component, HostBinding, input } from '@angular/core';
import { environment } from '@env/environment';


@Component({
  selector: 'app-svg-icon',
  standalone: true,
  template: ``,
  styleUrl: './svg-icon.component.scss',
  host: { 'class': 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SvgIconComponent {
  name = input.required<string>();

  @HostBinding('style.mask-image') get svgEl() {
    return `url("${environment.svgIconsUrl}${this.name()}.svg")`;
  }

  constructor(cdRef: ChangeDetectorRef) {
    cdRef.detach();
  }
}
