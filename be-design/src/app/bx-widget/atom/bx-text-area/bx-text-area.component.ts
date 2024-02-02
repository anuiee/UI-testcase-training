import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-bx-text-area',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './bx-text-area.component.html',
  styleUrl: './bx-text-area.component.scss'
})
export class BxTextAreaComponent {
  // @Input() type!:string;
  @Input() name!:string;
  @Input() control!:string;
  @Input() placeHolder!:string;
  @Input() iconSrc!:string;
  @Input() parentForm!:FormGroup;
  @Input() customStyle!: { [key: string]: string };
  @Input() textareaStyle!: { [key: string]: string };


}
