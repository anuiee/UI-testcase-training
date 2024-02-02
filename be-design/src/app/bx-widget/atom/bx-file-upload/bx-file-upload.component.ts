// bx-file-upload.component.ts
import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-bx-file-upload',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './bx-file-upload.component.html',
  styleUrls: ['./bx-file-upload.component.scss']
})
export class BxFileUploadComponent {
  @Input() name!: string;
  @Input() control!: string;
  @Input() parentForm!:FormGroup;
  @Output() fileChange = new EventEmitter<File>();
  
  onFileChange(event: any): void {
    const fileList: FileList = event.target.files;

    // if (fileList.length > 0) {
    //   const file: File = fileList[0];

    //   // Check if the selected file is a PDF
    //   if (file.type === 'application/pdf') {
    //     this.control.setValue(file);
    //     this.fileChange.emit(file);
    //   } else {
    //     // Handle the case where a non-PDF file is selected (display an error message, reset the input, etc.)
    //     console.error('Please select a PDF file.');
    //     this.control.setValue(null); // Reset the FormControl
    //   }
    // }
  }
}
