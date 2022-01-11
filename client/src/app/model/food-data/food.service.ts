import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Food } from 'src/app/interface/food-data/food.model'


@Injectable({
  providedIn: 'root'
})
export class FoodService {

  foodUrl = "http://localhost:9001/food"
  constructor(private http: HttpClient) { }

  getFoodInfo(): Observable<Food[]> {
    return this.http.get<Food[]>(this.foodUrl);
  }

  postFoodInfo(d: Food[]): Observable<Food[]> {
    // const headers = { 'content-type': 'application/json'}  
    const body = d
    // console.log(body)
    return this.http.post<Food[]>(this.foodUrl + '_post', body)

  }

  getFoodGroup(id: any): Observable<Food[]> {



    return this.http.get<Food[]>(this.foodUrl + '_get' + "/" + id)

    // let API_URL = `${this.REST_API}/read-book/${id}`;
    // return this.httpClient.get(API_URL, { headers: this.httpHeaders })
    //   .pipe(map((res: any) => {
    //       return res || {}
    //     }),
    //     catchError(this.handleError)
    //   )
  }
  getFoodName(id: any): Observable<Food[]> {



    return this.http.get<Food[]>(this.foodUrl + '_getName' + "/" + id)

  }
}
