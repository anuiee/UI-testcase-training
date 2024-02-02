import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bx-footer-head',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bx-footer-head.component.html',
  styleUrl: './bx-footer-head.component.scss'
})
export class BxFooterHeadComponent {
@Input() subHeading! : string;
}
