import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BxCardCountryComponent } from '../../molecule/bx-card-country/bx-card-country.component';

@Component({
  selector: 'app-bx-country',
  standalone: true,
  imports: [CommonModule,BxCardCountryComponent],
  templateUrl: './bx-country.component.html',
  styleUrl: './bx-country.component.scss'
})
export class BxCountryComponent {

}
