import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bx-label',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bx-label.component.html',
  styleUrl: './bx-label.component.scss'
})
export class BxLabelComponent {
@Input() labelText! : string;

}
