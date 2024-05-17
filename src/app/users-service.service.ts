import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Users } from './users';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersServiceService {
 

  url="http://localhost:8080/api/v1/"
  constructor(public http:HttpClient) { }

  addUser(u:Users)
  {
    return this.http.post
    <Users>(`${this.url}addUsers`, u);;
  }

  GetUser(): Observable<Users[]>{
    return this.http.get<Users[]>(`${this.url}users`);
  }

getUserById(id: number): Observable<Users> {
 
  return this.http.get<Users>(`${this.url}${id}`);
}

deleteUser(id: number): Observable<Object>{
  return this.http.delete(`${this.url}${id}`);
}

updateUser(id: number, user: Users): Observable<Object>{
  return this.http.put(`${this.url}${id}`, user);
}

}
