import { Component, Input, Output, EventEmitter } from '@angular/core';
// import { HttpResponse, HttpEventType } from '@angular/common/http';
import { UploadService } from './upload.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent {
  @Input()
  multi: boolean;
  @Input()
  classStyle: string;
  @Output()
  fileUploaded = new EventEmitter<any[]>();
  progress: { percentage: number } = { percentage: -1 };
  arrayFileUpload:any = [];
  url: string = '';
  isValid = true;

  constructor(private uploadService: UploadService) { }

  ngOnInit() { }
  selectFile(event) {
    this.progress.percentage = 0;
    const selectedFiles: Array<File> = event.target.files;
    this.uploadLocal(selectedFiles);

    if (this.isValid) {
      this.uploadService.postFile(selectedFiles).subscribe(fileUploaded => {
        this.progress.percentage = 100;
        setTimeout(() => {
          this.progress.percentage = -1;
        }, 3000);
        this.fileUploaded.emit(fileUploaded);

        // console.log('event debug: ', event, typeof event);
        // if (event.type === HttpEventType.UploadProgress) {
        //   console.log('hereeeeeeee');
        //   this.progress.percentage = Math.round((100 * event.loaded) / event.total);
        // } else if (event instanceof HttpResponse) {
        //   console.log('File is completely uploaded!');
        // }
      });
    } else {
      this.fileUploaded.emit([]);
    }

    // selectedFiles = undefined;
  }

  private uploadLocal(selectedFiles) {
    if (selectedFiles.length > 0) {
      for (var i = 0; i < selectedFiles.length; i++) {
        let reader: any = new FileReader();
        let files = selectedFiles[i];
        let image = new Array();
        reader.readAsDataURL(selectedFiles[i]);
        reader.onload = event => {
          image['url'] = event.target.result;
        };
        if (files.type.indexOf('image/') !== -1) {
          image['filename'] = files.name;
          image['filetype'] = files.type;
          image['value'] = reader.result;
          if (this.multi) {
            this.arrayFileUpload.push(image);
          } else {
            this.arrayFileUpload[i] = image;
          }
          this.isValid = true;
        } else {
          this.isValid = false;
        }
      }
      // console.log(this.arrayFileUpload);
    }
    let reader = new FileReader();
    reader.readAsDataURL(selectedFiles[0]);
    reader.onload = (event: any) => {
      // called once readAsDataURL is completed
      this.url = event.target.result;
    };
  }
  private deleteImageUpload(id) {
    this.progress.percentage = -1;
    this.arrayFileUpload.splice(id,1);
  }
}
