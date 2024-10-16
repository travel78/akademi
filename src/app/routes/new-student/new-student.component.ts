import { ChangeDetectionStrategy, Component } from '@angular/core';
import {HeaderComponent} from "@app/components";

@Component({
  selector: 'app-new-student',
  standalone: true,
    imports: [
        HeaderComponent
    ],
  templateUrl: './new-student.component.html',
  styleUrl: './new-student.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewStudentComponent {

}
