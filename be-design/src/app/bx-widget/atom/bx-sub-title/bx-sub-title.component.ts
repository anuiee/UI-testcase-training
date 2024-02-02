import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bx-sub-title',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bx-sub-title.component.html',
  styleUrl: './bx-sub-title.component.scss'
})
export class BxSubTitleComponent {
@Input() titleSrc! : string;
@Input() titleText! : string;
@Input() titlePara! : string;
@Input() dynamicStyle!: { [key: string]: string };
@Input() dynamicArrowStyle!: { [key: string]: string };
@Input() dynamicTextStyle!: { [key: string]: string };

// @Input() textStyle!: { [key: string]: string };

}
