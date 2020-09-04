import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { User } from '../models/user';

const api_url = 'https://shopix-backend.herokuapp.com';
const local_api_url = 'http://localhost:7600';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}
  saveUser(user: User) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.http.post(api_url + '/shopix-api/users/', user, httpOptions);
  }
  findByPasswordAndEmail(user: User) {
    return this.http.get(`${api_url}/shopix-api/users/email/${user.email}`);
  }
  findByPasswordAndEmail1(user: User) {
    return this.http.get(
      `${api_url}/shopix-api/users/findby/${user.email}/pass/${user.password}`
    );
  }
  getAllUsers() {
    return this.http.get(`${api_url}/shopix-api/users/`);
  }
  changeStatus(id: number, status: boolean) {
    console.log('this the changeStatus Service' + id + '  ' + status);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.http.post(
      `${api_url}/shopix-api/users/id/${id}/status/${status}`,
      httpOptions
    );
  }
}
