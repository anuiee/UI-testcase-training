import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BxOfferCardComponent } from '../../molecule/bx-offer-card/bx-offer-card.component';
import { BxSubmitBtnComponent } from '../../atom/bx-submit-btn/bx-submit-btn.component';

@Component({
  selector: 'app-bx-offer',
  standalone: true,
  imports: [CommonModule,BxOfferCardComponent,BxSubmitBtnComponent],
  templateUrl: './bx-offer.component.html',
  styleUrl: './bx-offer.component.scss'
})
export class BxOfferComponent {
  customStyles = {
    background: '#0089B8',
    color:'#fff'
  };
}
