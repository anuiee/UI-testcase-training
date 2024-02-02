import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bx-sub-heading',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bx-sub-heading.component.html',
  styleUrl: './bx-sub-heading.component.scss'
})
export class BxSubHeadingComponent {

  @Input() subHeading! : string;
 
}
