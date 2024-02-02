import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-bx-phone-input',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,FormsModule],
  templateUrl: './bx-phone-input.component.html',
  styleUrl: './bx-phone-input.component.scss'
})
export class BxPhoneInputComponent {
  @Input() type!:string;
  @Input() name!:string;
  @Input() codeName!:string;
  @Input() control!:string;
  @Input() codeControl!:string;
  @Input() placeHolder!:string;
  @Input() iconSrc!:string;
  @Input() parentForm!:FormGroup;
  
}
