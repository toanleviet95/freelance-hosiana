import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '@env/environment';
const BASE_URL = environment.apiUrl;

export abstract class ApiBaseService {

  constructor(private http: HttpClient) { }

  // protected get(url: string, relative: boolean = true): Observable<any> {
  //   let fullUrl = relative ? BASE_URL + url : url;
  //   return this.http.get(fullUrl);
  // }

  protected get(path: string, options: any = {}): Observable<any> {
    return this.http.get(BASE_URL + path, options);
  }

  protected post(url: string, data): Observable<any> {
    return this.http.post<any>(BASE_URL + url, data);
  }
}
