import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BxBannerComponent } from '../../molecule/bx-banner/bx-banner.component';
import { BxFormComponent } from '../../molecule/bx-form/bx-form.component';

@Component({
  selector: 'app-bx-contact',
  standalone: true,
  imports: [CommonModule,BxBannerComponent,BxFormComponent],
  templateUrl: './bx-contact.component.html',
  styleUrl: './bx-contact.component.scss'
})
export class BxContactComponent {

}
