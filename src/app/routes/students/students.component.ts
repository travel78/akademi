import { ChangeDetectionStrategy, Component } from '@angular/core';
import {HeaderComponent} from "@app/components";

@Component({
  selector: 'app-students',
  standalone: true,
    imports: [
        HeaderComponent
    ],
  templateUrl: './students.component.html',
  styleUrl: './students.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StudentsComponent {

}
