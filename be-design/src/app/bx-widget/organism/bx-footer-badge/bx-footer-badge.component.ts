import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BxMailBoxComponent } from '../../atom/bx-mail-box/bx-mail-box.component';

@Component({
  selector: 'app-bx-footer-badge',
  standalone: true,
  imports: [CommonModule,BxMailBoxComponent],
  templateUrl: './bx-footer-badge.component.html',
  styleUrl: './bx-footer-badge.component.scss'
})
export class BxFooterBadgeComponent {

}
