import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bx-card-country',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bx-card-country.component.html',
  styleUrl: './bx-card-country.component.scss'
})
export class BxCardCountryComponent {

  @Input() heading!: string;
  @Input() imageSrc!: string;
  @Input() address!: string[];
  @Input() office!: string;
  @Input() phone!: string;
  @Input() mobile!: string;
  @Input() email!: string;
}
