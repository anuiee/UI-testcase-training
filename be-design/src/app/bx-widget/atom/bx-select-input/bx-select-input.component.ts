import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-bx-select-input',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './bx-select-input.component.html',
  styleUrl: './bx-select-input.component.scss'
})
export class BxSelectInputComponent {

@Input() name!: string;
@Input() control!: string;
@Input() parentForm!: FormGroup ;
@Input() iconSrc: string = '';
@Input() options: { label: string; value: string }[] = [];
@Input() customStyle!: { [key: string]: any};
@Input() customDivStyle!: { [key: string]: any };
@Input() customInputStyle!: { [key: string]: any };



}
