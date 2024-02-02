import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bx-submit-btn',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bx-submit-btn.component.html',
  styleUrl: './bx-submit-btn.component.scss'
})
export class BxSubmitBtnComponent {
@Input() btnText! : string;
// @Input() style: any;

@Input() dynamicStyle!: { [key: string]: string };
@Input() isDisabled!: boolean;
}
