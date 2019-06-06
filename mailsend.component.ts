import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-mailsend',
  templateUrl: './mailsend.component.html',
  styleUrls: ['./mailsend.component.css']
})
export class MailsendComponent implements OnInit  {
  SERVER_URL = 'http://localhost:8080/send-mail-attachment';
  uploadForm: FormGroup;

  constructor(private httpClient: HttpClient, private formBuilder: FormBuilder,
              private el: ElementRef
) {}

ngOnInit() {
  this.uploadForm = this.formBuilder.group({
    profile: ['']
  });
}


sendMail() {
  console.log("ssssss");
  const formData = new FormData();
  console.log("ssssss"); 
  formData.append('file', this.uploadForm.get('profile').value);
  console.log("aaa");
  this.httpClient.post<any>(this.SERVER_URL, formData).subscribe(
    (res) => console.log(res),
    (err) => console.log(err)
  );
}

onFileSelect(event: { target: { files: any[]; }; }) {
  console.log("wwwww");
  if (event.target.files.length > 0) {
    const file = event.target.files[0];
    this.uploadForm.get('profile').setValue(file);
  }
}


//   sendMail() {
//     console.log("ssssss");
// const inputEl = this.el.nativeElement.firstElementChild;
// if (inputEl.files.length == 0) { return; }

// const files :FileList = inputEl.files;
// const formData = new FormData();
// for(var i = 0; i < files.length; i++){
// formData.append(files[i].name, files[i]);
// }

// this.http
// .post('http://localhost:8080/send-mail-attachment', formData)
// .subscribe();

// }

}
  // sendMail() {
  //     const inputEl: HTMLInputElement = this.inputEl.nativeElement;
  //     const fileCount: number = inputEl.files.length;
  //     const formData = new FormData();
  //     if (fileCount > 0) { // a file was selected
  //         for (let i = 0; i < fileCount; i++) {
  //             formData.append('file[]', inputEl.files.item(i));
  //         }
  //         this.http
  //             .post('http://localhost:8080/send-mail-attachment', formData);
  //             // do whatever you do...
  //             // subscribe to observable to listen for response
  //     }
  // }


