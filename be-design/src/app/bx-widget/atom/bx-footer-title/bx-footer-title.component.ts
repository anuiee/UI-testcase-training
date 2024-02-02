import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bx-footer-title',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bx-footer-title.component.html',
  styleUrl: './bx-footer-title.component.scss'
})
export class BxFooterTitleComponent {
  @Input() titleText! : string;
  @Input() titleSrc! : string;

}
