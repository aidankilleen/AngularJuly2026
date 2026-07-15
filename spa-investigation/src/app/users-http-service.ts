import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { User } from './user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersHttpService {

  public http = inject(HttpClient);
  private url = "http://localhost:3000/users"

  public users:User[] = [ ];

  constructor() {
  }

  getUsers():Observable<User[]> {
    return this.http.get<User[]>(this.url);
  }

  getUser(id:number):Observable<User> {
    return this.http.get<User>(`${this.url}/${id}`);
  }

  deleteUser(id:number):Observable<void> {
    return this.http.delete<void>(`${this.url}/${id}`)
  }

  addUser(user:User):Observable<User> {

    // don't pass an object with id
    // json-server will assign an id if one is missing
    let userToAdd = {
      name:user.name,
      email:user.email,
      active:user.active
    };
    return this.http.post<User>(this.url, userToAdd);
  }

  updateUser(user:User): Observable<User> {
    return this.http.put<User>(`${this.url}/${user.id}`, user);
  }
  getUsersOriginal() {
    // HttpClient
    // uses Observables - not promises, doesn't return data directly

    // the fetch api returns a promise
    // the http request is made
    // even if you don't supply a then()
    //fetch(this.url)
      //.then((data)=>{
      //  console.log(data)
      //})

    // in an observable the request
    // is only made when someone subscribes
    this.http.get(this.url)
      //.subscribe((data)=>{
      //  console.log(data);
      //});
  }

}
