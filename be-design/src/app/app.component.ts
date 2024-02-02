import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { BxCardCountryComponent } from './bx-widget/molecule/bx-card-country/bx-card-country.component';
import { BxCountryComponent } from './bx-widget/organism/bx-country/bx-country.component';
import { LayoutComponent } from './bx-layout/layout/layout.component';
import { BxDisplayComponent } from './bx-widget/organism/bx-display/bx-display.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,RouterModule,LayoutComponent,BxDisplayComponent,RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'be-design';
}
