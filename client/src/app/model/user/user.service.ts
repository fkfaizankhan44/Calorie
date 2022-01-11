import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { user } from 'src/app/interface/user/user';



@Injectable({
  providedIn: 'root'
})
export class UserService {

  userUrl = "http://localhost:9001/users"

  constructor(private http: HttpClient) { }
  getUsersInfo(): Observable<user[]> {
    return this.http.get<user[]>(this.userUrl);
  }

  postUsersInfo(userData: user): Observable<user[]> {
    let httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
    let option = {
      headers: httpHeaders
    };
    const body = userData
    return this.http.post<user[]>(this.userUrl + '_post', body, option)

  }
  getUserById(id: any): Observable<user[]> {
    return this.http.get<user[]>(this.userUrl + '_get' + "/" + id)
  }


  deleteUserInfo(userId: string): Observable<user[]> {
    let httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
    // const body = userId
    return this.http.delete<user[]>(this.userUrl + '_delete' + '/' + userId)
  }
  updateUsersInfo(userData: user): Observable<user[]> {
    let httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
    let option = {
      headers: httpHeaders
    };
    const body = userData
    return this.http.put<user[]>(this.userUrl + '_update' + '/' + userData._id, body, option)
  }
}
