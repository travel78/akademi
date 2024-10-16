import {ChangeDetectionStrategy, Component, effect, inject, signal, Signal} from '@angular/core';
import {
  HeaderComponent,
  PaginatorComponent,
  SearchComponent,
  SvgIconComponent,
  UserMenuComponent
} from '@app/components';
import {RouterLink} from '@angular/router';
import {TeacherService} from '@app/services';
import {AsyncPipe, NgOptimizedImage, NgTemplateOutlet} from '@angular/common';

@Component({
  selector: 'app-teachers',
  standalone: true,
  imports: [
    HeaderComponent,
    UserMenuComponent,
    RouterLink,
    SvgIconComponent,
    AsyncPipe,
    NgTemplateOutlet,
    NgOptimizedImage,
    SearchComponent,
    PaginatorComponent
  ],
  templateUrl: './teachers.component.html',
  styleUrl: './teachers.component.scss',
  host: {'class': 'flex flex-col gap-y-13'},
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TeachersComponent {
  readonly teacherSer = inject(TeacherService);
  teachers$ = this.teacherSer.getMany();
  total = signal(30);
  page = signal(2);

  constructor() {
    setTimeout(()=>{
      this.total.set(50);
    },2000)
    setTimeout(()=>{
      this.total.set(240);
    },4000)
  }

  onSearch(event: string) {
    console.log(event);
  }

  onPageChange(page: number) {
    this.page.set(page);
    console.log('change ', page);
  }
}
