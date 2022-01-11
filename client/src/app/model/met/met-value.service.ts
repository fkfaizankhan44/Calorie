import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MetValue } from 'src/app/interface/met/met-value.model';

@Injectable({
  providedIn: 'root'
})
export class MetValueService {
  metValueUrl = "http://localhost:9001/metValue"
  constructor(private http: HttpClient) { }

  getMetValueInfo(data: any): Observable<MetValue[]> {

    let httpParams = new HttpParams()
    const data2 = JSON.parse(data)


    if (data2 && data2.userId) {
      httpParams = httpParams.set('userId', data2.userId)
      if (data2 && data2.creationDate) {
        const data = JSON.stringify(data2.creationDate)
        httpParams = httpParams.set('creationDate', data)
      }
    }

    return this.http.get<MetValue[]>(this.metValueUrl, { params: httpParams });
  }

  postMetValueInfo(metData: MetValue[]): Observable<MetValue[]> {
    const body = metData
    return this.http.post<MetValue[]>(this.metValueUrl + '_post', body)
  }
  deleteMetValueInfo(metId: string): Observable<MetValue> {
    let httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.delete<MetValue>(this.metValueUrl + '_delete' + '/' + metId)
  }
}
