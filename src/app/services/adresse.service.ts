import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {User} from "../models/user";
import {Adresse} from "../models/adresse";
const api_url ="https://shopix-backend.herokuapp.com";
@Injectable({
  providedIn: 'root'
})
export class AdresseService {

  constructor(private http:HttpClient) { }
  addAdresse(user:User,adresse:Adresse){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })};
    return this.http.post(`${api_url}/shopix-api/adresse/email/${user.email}/password/${user.password}`,adresse,httpOptions);



  }
}
