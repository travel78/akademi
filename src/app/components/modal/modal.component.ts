import {ChangeDetectionStrategy, Component, inject, input, Signal, Type} from '@angular/core';
import {ModalService} from '@app/services';
import {NgComponentOutlet, NgTemplateOutlet} from '@angular/common';
import {ModalOptions} from '@app/innterfaces-types';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [
    NgComponentOutlet,
    NgTemplateOutlet
  ],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss',
  host: {
    'class': 'flex fixed justify-center items-center top-0 left-0 w-full h-full'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ModalComponent implements ModalOptions<Signal<unknown>>{
  readonly modalSer = inject(ModalService);
  cmp = input<Type<unknown>>();
  width = input<string>('20rem');
  disableClose = input<boolean>(false);

  onClose() {
    if (!this.disableClose()) {
      this.modalSer.close();
    }
  }
}
