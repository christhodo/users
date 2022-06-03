import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '@user-angular/api-interfaces';
import { map } from 'rxjs/operators';

const BASE_URL = 'https://jsonplaceholder.typicode.com';
const model = 'users';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${BASE_URL}/${model}`).pipe(
      map((users) =>
        users.map((user) => ({
          ...user,
          name: user.name.toUpperCase(),
          isAdmin: user.id === 10 ? 'Admin' : 'User',
          defaultImageUrl: `https://robohash.org/${user.username}`,
        }))
      )
    );
  }

  getUser(): Observable<User> {
    return this.http.get<User>(`${BASE_URL}/${model}/1`);
  }

  createUser(user: User): Observable<User> {
    return this.http.post<User>(`${BASE_URL}/${model}`, user);
  }

  updateUser(user: User): Observable<User> {
    return this.http.put<User>(`${BASE_URL}/${model}/${user.id}`, user);
  }
}
