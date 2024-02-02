import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BxButtonScheduleComponent } from '../../atom/bx-button-schedule/bx-button-schedule.component';

@Component({
  selector: 'app-bx-navbar',
  standalone: true,
  imports: [CommonModule,BxButtonScheduleComponent],
  templateUrl: './bx-navbar.component.html',
  styleUrl: './bx-navbar.component.scss'
})
export class BxNavbarComponent {
  handleDynamicClickEvent(){
    alert("Button Clicked");
  }
}
