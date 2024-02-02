import { Component } from '@angular/core';
import { SharedService } from '../../../core/shared.service';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-bx-display',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bx-display.component.html',
  styleUrl: './bx-display.component.scss'
})
export class BxDisplayComponent {
  

  constructor(private dataSharingService: SharedService) {}
  formData$ = this.dataSharingService.formData$;
}
