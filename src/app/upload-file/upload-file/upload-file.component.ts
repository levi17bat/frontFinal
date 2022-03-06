import { Component, OnInit } from '@angular/core';
import { UploadFileService } from '../upload-file.service';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css']
})
export class UploadFileComponent implements OnInit {

files: Set<File> | null = null;  

  constructor(private service: UploadFileService) { }

  ngOnInit( ): void {
  }

  onChange(event: any){
console.log(event);

const selectedFile = <FileList>event.srcElement.files;
const filesName = [];
filesName.push(selectedFile[0]);





this.files = new Set();
this.files.add(selectedFile[0]);








  }
  onUpload(){
    if(this.files){
      this.service.upload(this.files, 'http://localhost:3000/uploads')
      .subscribe(response => console.log('Upload Concluído'));
    }

  }


}
