import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {ModalService} from '@app/services';

@Component({
  selector: 'app-delete',
  standalone: true,
  imports: [],
  templateUrl: './delete.component.html',
  styleUrl: './delete.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DeleteComponent {
  readonly modalSer = inject(ModalService);

  onDelete() {
    this.modalSer.close(true);
  }

  onCancel() {
    this.modalSer.close(false);
  }
}
