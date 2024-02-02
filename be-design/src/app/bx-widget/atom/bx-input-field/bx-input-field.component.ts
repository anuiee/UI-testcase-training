import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-bx-input-field',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './bx-input-field.component.html',
  styleUrl: './bx-input-field.component.scss'
})
export class BxInputFieldComponent  {

@Input() type!:string;
@Input() name!:string;
@Input() control!:string;
@Input() placeHolder!:string;
@Input() iconSrc!:string;
@Input() style!:any;
@Input() parentForm!:FormGroup;
@Input() customDivStyle!: { [key: string]: string };

}
