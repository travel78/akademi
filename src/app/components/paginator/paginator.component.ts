import {ChangeDetectionStrategy, Component, computed, input, model, Signal} from '@angular/core';
import {SvgIconComponent} from '@app/components';

enum Paging {
  prev = -1,
  next = -2,
}

@Component({
  selector: 'app-paginator',
  standalone: true,
  imports: [
    SvgIconComponent
  ],
  templateUrl: './paginator.component.html',
  styleUrl: './paginator.component.scss',
  host: {'class': 'flex gap-x-4'},
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaginatorComponent {
  protected readonly Paging = Paging;
  activePage = model<number>(0, {alias: 'page'});
  perPage = input<number>(0);
  total = input<number>(0);
  pages: Signal<number[]> = computed(() => {
    const length = 4;
    const page = this.activePage();
    const pages = Math.ceil(Number(this.total() / this.perPage()));
    const pushToArr = this.makePushToArray([]);
    if (pages > length + 1) { //if too long
      switch (true) {
        case (page < length): //active in the beginning
          pushToArr(1, length - 1);
          pushToArr(Paging.next, 1);
          return pushToArr(pages, 1);
        case (page > pages - length + 1): //active in the end
          pushToArr(1, 1);
          pushToArr(Paging.prev, 1);
          return pushToArr(pages - 2, length - 1);
        default: //active in the middle
          pushToArr(1, 1);
          pushToArr(Paging.prev, 1);
          pushToArr(page, 1);
          pushToArr(Paging.next, 1);
          return pushToArr(pages, 1);
      }
    }
    return pushToArr(1, pages);
  })

  onGoToPage(page: number) {
    this.activePage.update((i) =>
      page > 0 ? page : page === Paging.prev ? i - 1 : i + 1
    );
  }

  makePushToArray(arr: number[]) {
    return (start: number = 0, length: number = 0) => {
      const to = length + start;
      for (let i = start; i < to; i++) {
        arr.push(i);
      }
      return arr;
    }
  }
}
