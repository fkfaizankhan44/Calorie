import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { met } from 'src/app/interface/met-data/met'

@Injectable({
  providedIn: 'root'
})
export class MetService {
  metUrl = "http://localhost:9001/met"
  constructor(private http: HttpClient) { }

  getMetInfo(): Observable<met[]> {
    return this.http.get<met[]>(this.metUrl);
  }

  postMetInfo(d: met): Observable<met[]> {
    // const headers = { 'content-type': 'application/json'}  
    const body = d
    // console.log(body)
    return this.http.post<met[]>(this.metUrl + '_post', body)

  }
  getActivity(id: any): Observable<met[]> {
    return this.http.get<met[]>(this.metUrl + '_get' + "/" + id)
  }

  getMotion(id: any): Observable<met[]> {
    return this.http.get<met[]>(this.metUrl + '_getMotion' + "/" + id)
  }
}
