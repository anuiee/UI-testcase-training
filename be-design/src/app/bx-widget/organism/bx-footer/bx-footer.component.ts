import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BxFooterHeadComponent } from '../../atom/bx-footer-head/bx-footer-head.component';
import { BxFooterTitleComponent } from '../../atom/bx-footer-title/bx-footer-title.component';

@Component({
  selector: 'app-bx-footer',
  standalone: true,
  imports: [CommonModule,
          BxFooterHeadComponent,
          BxFooterTitleComponent
        ],
templateUrl: './bx-footer.component.html',
  styleUrl: './bx-footer.component.scss'
})
export class BxFooterComponent {

}
