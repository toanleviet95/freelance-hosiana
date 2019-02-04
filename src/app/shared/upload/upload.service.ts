import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

// const uploadApi: string = 'http://27.0.14.176:1337/api/file';
import { environment } from '@env/environment';
const BASE_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class UploadService {
  constructor(private http: HttpClient) {}

  postFile(files: Array<File>): Observable<any> {
    const formData: FormData = new FormData();
    for (let i = 0; i < files.length; i++) {
      formData.append('file', files[i], files[i].name);
    }
    return this.http.post(`${BASE_URL}/media/uploads`, formData, {}).map((res: any) => res.result.data);
    // .catch((e) => this.handleError(e));
  }

  // pushFileToStorage(file: any): Observable<HttpEvent<{}>> {
  //   const formdata: FormData = new FormData();
  //   const listFile: any = [];
  //   for (let i = 0; i < file.length; i++) {
  //     // console.log('file: ', file);
  //     formdata.append('files', file[i]);
  //   }
  //   var options = { content: formdata };
  //   const req = new HttpRequest('POST', `${BASE_URL}/media/uploads`, options, {
  //     reportProgress: true,
  //     responseType: 'text'
  //   });

  //   return this.http.request(req);
  // }

  // getFiles(): Observable<any> {
  //   return this.http.get(`${uploadApi}/all`);
  // }
}
