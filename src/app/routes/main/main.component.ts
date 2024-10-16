import {ChangeDetectionStrategy, Component} from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";
import {SvgIconComponent} from "@app/components";
import {NgOptimizedImage} from "@angular/common";

type TSidenavLink = {
  url: string;
  iconName: string;
  label: string;
};

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    RouterOutlet,
    SvgIconComponent,
    RouterLink,
    RouterLinkActive,
    NgOptimizedImage
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
  host: {'class': 'flex h-full'},
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainComponent {
  readonly links: TSidenavLink[] = [
    {
      url: 'dashboard',
      iconName: 'home',
      label: 'Dashboard'
    },
    {
      url: 'students',
      iconName: 'student',
      label: 'Students'
    },
    {
      url: 'teachers',
      iconName: 'teacher',
      label: 'Teachers'
    },
    {
      url: 'event',
      iconName: 'calendar',
      label: 'Event'
    },
    {
      url: 'finance',
      iconName: 'finance',
      label: 'Finance'
    },
    {
      url: 'food',
      iconName: 'food',
      label: 'Food'
    },
    {
      url: 'user',
      iconName: 'user',
      label: 'User'
    },
    {
      url: 'chat',
      iconName: 'chat',
      label: 'Chat'
    },
    {
      url: 'activity',
      iconName: 'activity',
      label: 'Latest Activity'
    },
  ];
}
