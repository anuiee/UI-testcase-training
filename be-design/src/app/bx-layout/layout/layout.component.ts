import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BxNavbarComponent } from '../../bx-widget/organism/bx-navbar/bx-navbar.component';
import { BxSubHeadingComponent } from '../../bx-widget/atom/bx-sub-heading/bx-sub-heading.component';
import { BxSubTitleComponent } from '../../bx-widget/atom/bx-sub-title/bx-sub-title.component';
import { BxOfferCardComponent } from '../../bx-widget/molecule/bx-offer-card/bx-offer-card.component';
import { BxOfferComponent } from '../../bx-widget/organism/bx-offer/bx-offer.component';
import { BxCountryComponent } from '../../bx-widget/organism/bx-country/bx-country.component';
import { BxFooterBadgeComponent } from '../../bx-widget/organism/bx-footer-badge/bx-footer-badge.component';
import { BxFooterComponent } from '../../bx-widget/organism/bx-footer/bx-footer.component';
import { BxFooterBottomComponent } from '../../bx-widget/organism/bx-footer-bottom/bx-footer-bottom.component';
import { BxContactComponent } from '../../bx-widget/organism/bx-contact/bx-contact.component';
import { BxDisplayComponent } from '../../bx-widget/organism/bx-display/bx-display.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [CommonModule,
          BxNavbarComponent,
            BxSubHeadingComponent,
            BxSubTitleComponent,
            BxOfferCardComponent,
            BxOfferComponent,
            BxCountryComponent,
            BxFooterBadgeComponent,
            BxFooterComponent,
            BxFooterBottomComponent,
            BxContactComponent,
            RouterOutlet
            
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {

}
