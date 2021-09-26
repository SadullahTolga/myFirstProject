import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ImageService } from 'src/app/service/image.service';

@Component({
  selector: 'app-candidate-image',
  templateUrl: './candidate-image.component.html',
  styleUrls: ['./candidate-image.component.css']
})
export class CandidateImageComponent implements OnInit {
   user:any
   imageForm:FormGroup
   selectedFile :File=null
   imageUrl:string|ArrayBuffer
   uploadedImgId: number;
  constructor(
    private formBuilder:FormBuilder,
    private toastrService:ToastrService,
    private imageService:ImageService

  ) { }

  ngOnInit(): void {
    this.createImageUploadForm();
  }

  createImageUploadForm() {
    this.imageForm = this.formBuilder.group({
      userId: [this.getUserId()],
      multipartFile: ['', Validators.required],
    });
  }

  onFileSelected(event) {
    this.selectedFile = event.target.files[0];
    
    
    const reader = new FileReader();
    reader.readAsDataURL(this.selectedFile);

    reader.onload = (event) => {
      this.imageUrl = reader.result;
    };
  }

  imageUpload() {
    if (this.imageForm.valid) {
      let formData: any = new FormData();
      formData.append('multipartFile', this.selectedFile);
      formData.append('userId', this.imageForm.get('userId').value);

      this.imageService
        .upload(formData, this.getUserId())
        .subscribe((response: any) => {
          this.uploadedImgId = response.data.id;
      
          this.toastrService.success('Success');
      
          this.imageForm.reset();
        });
    }
  }

  getUserId(): number {
    this.user = JSON.parse(localStorage.getItem('user'));
    return this.user.data.id;
  }

}