import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
const api_url ="https://shopix-backend.herokuapp.com";
@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  constructor(private http: HttpClient) { }
 findAll(){
   return this.http.get(`${api_url}/shopix-api/categories/`);
 }

}
