import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { BxInputFieldComponent } from '../../atom/bx-input-field/bx-input-field.component';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { BxTextAreaComponent } from '../../atom/bx-text-area/bx-text-area.component';
import { BxLabelComponent } from '../../atom/bx-label/bx-label.component';
import { BxSubmitBtnComponent } from '../../atom/bx-submit-btn/bx-submit-btn.component';
import { BxRounndBtnComponent } from '../../atom/bx-rounnd-btn/bx-rounnd-btn.component';
import { SharedService } from '../../../core/shared.service';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { BxFileUploadComponent } from '../../atom/bx-file-upload/bx-file-upload.component';
import { BxSelectInputComponent } from '../../atom/bx-select-input/bx-select-input.component';
import { BxPhoneInputComponent } from '../../atom/bx-phone-input/bx-phone-input.component';

@Component({
  selector: 'app-bx-form',
  standalone: true,
  imports: [CommonModule,BxInputFieldComponent,
            BxTextAreaComponent,
            BxLabelComponent,
            BxSubmitBtnComponent,
            BxRounndBtnComponent,
            BxFileUploadComponent,
            BxSelectInputComponent,
            BxPhoneInputComponent,
            FormsModule,ReactiveFormsModule,RouterModule,RouterOutlet
          ],
  templateUrl: './bx-form.component.html',
  styleUrl: './bx-form.component.scss'
})
export class BxFormComponent  {


  dynamicstyle = {
    display : 'none'
  };

  dynamicDivStyle = {
    width:'70px',
    border:'none',
    boderLeft:'1px solid black'
  };
  dynamicInputStyle = {
    MarginLeft:'10px',
    height:'25px'
  };
  dynamicPhoneStyle = {
    borderTop:'none',
    borderBottom:'none',
    borderRight:'none',
    height:'20px'
  };

  textareaStyle = {
    width : '80%'
  };

  customStyles = {
    background: '#10385B',
    color:'#fff',
    
  };


  myForm! : FormGroup;

  countryOptions = [
    { label: 'India', value: 'India' },
    { label: 'USA', value: 'USA' },
    { label: 'UAE', value: 'UAE' },
    { label: 'UK', value: 'UK' },
  ];
  countryCodes = [
    { label: '+91', value: '+91' },
    { label: '+1', value: '+1' },
    { label: '+971', value: '+971' },
    { label: '+44', value: '+44' },
  ];

  constructor(private formBuilder: FormBuilder,
    private dataSharingService:SharedService,
    private router: Router) {

      this.myForm = this.formBuilder.group({
      
        name: new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z .]+$')]),
        company: new FormControl('',[Validators.required]), 
        role: new FormControl('',[Validators.required]),
        email: new FormControl('',[Validators.required,Validators.email]),
        phone: new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(10),Validators.pattern('[0-9]+$')]),
        country: new FormControl('',[Validators.required]),
        message: new FormControl('',[Validators.required]),
        comment: new FormControl('',[Validators.required]),
        inputFile: new FormControl('',[Validators.required]),
        code: new FormControl('',[Validators.required]),

    });
    }

    get username(){
      return this.myForm.get('name');
    }
    onSubmit() {
      if(this.myForm.valid) {
      console.log(this.myForm.value);
      this.dataSharingService.updateFormData(this.myForm.value);
      this.router.navigate(['/display']);
      alert('Form Submitted');
     }
     else{
        alert('Please fill all required field');
     }
    }

    onFileChange(event: any) {
      if (event && event.target) {
        const fileInput = event.target;
        if (fileInput.files.length > 0) {
          const fullPath = fileInput.files[0].name;
          const fileName = fullPath.split('\\').pop() || fullPath.split('/').pop();
          this.myForm.get('inputFile')?.setValue(fileName);
        } else {
          this.myForm.get('inputFile')?.setValue(null);
        }
      }
    }                                                                                                 



}
