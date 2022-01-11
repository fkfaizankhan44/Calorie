import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Calorie } from 'src/app/interface/calorie/calorie.model'


@Injectable({
  providedIn: 'root'
})


export class CalorieService {
  calorieUrl = "http://localhost:9001/calorie"
  constructor(private http: HttpClient) { }

  getCalorieInfo(data: any): Observable<Calorie[]> {
    let httpParams = new HttpParams()
    const data2 = JSON.parse(data)
    if (data2 && data2.userId) {
      httpParams = httpParams.set('userId', data2.userId)

      if (data2 && data2.creationDate) {
        const data = JSON.stringify(data2.creationDate)
        httpParams = httpParams.set('creationDate', data)

      }
    }

    return this.http.get<Calorie[]>(this.calorieUrl, { params: httpParams });
  }

  postCalorieInfo(data: Calorie[]): Observable<Calorie[]> {
    const body = data
    return this.http.post<Calorie[]>(this.calorieUrl + '_post', body)

  }
  deleteCalorieInfo(foodId: string): Observable<Calorie[]> {
    let httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.delete<Calorie[]>(this.calorieUrl + '_delete' + '/' + foodId)
  }

}
