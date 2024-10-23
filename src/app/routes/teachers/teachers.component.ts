import {ChangeDetectionStrategy, Component, inject, signal, TemplateRef, viewChild} from '@angular/core';
import {
  DeleteComponent,
  HeaderComponent,
  PaginatorComponent,
  SearchComponent,
  SvgIconComponent,
  UserMenuComponent
} from '@app/components';
import {RouterLink} from '@angular/router';
import {ModalService, TeacherService} from '@app/services';
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
    PaginatorComponent,
    DeleteComponent
  ],
  templateUrl: './teachers.component.html',
  styleUrl: './teachers.component.scss',
  host: {'class': 'flex flex-col gap-y-13'},
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TeachersComponent {
  readonly teacherSer = inject(TeacherService);
  readonly modalSer = inject(ModalService);
  teachers$ = this.teacherSer.getMany();
  total = signal(240);
  page = signal(2);

  content = viewChild<TemplateRef<unknown>>('content');

  constructor() {
  }

  onSearch(event: string) {
    console.log(event);
  }

  onPageChange(page: number) {
    this.page.set(page);
  }

  onSort() {
    // this.modalSer.open(this?.content());
    this.modalSer.open(DeleteComponent, {width: '400px'}).subscribe(
      (res)=>{
        console.log(res);
      }
    );
  }
}
