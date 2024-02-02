import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-bx-button-schedule',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bx-button-schedule.component.html',
  styleUrl: './bx-button-schedule.component.scss'
})
export class BxButtonScheduleComponent {
@Input() iconSrc! : string;
@Input() btnTitle! : string;
@Input() style : any;

@Input() dynamicStyle!: { [key: string]: string };
@Output() dynamicClickEvent = new EventEmitter<void>();

emitDynamicClickEvent() {
  // Emit the custom event when the button is clicked
  this.dynamicClickEvent.emit();
}
}
