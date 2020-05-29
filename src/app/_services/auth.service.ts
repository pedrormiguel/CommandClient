import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

 constructor(private http: HttpClient) { }

 private baseUrl: any =  'https://localhost:5001/home/';
 private urlToDelete: any;

 get(path: any) {
   return this.http.get(this.baseUrl + path);
 }

 post(path: any, object: any) {
   return this.http.post(this.baseUrl + path, object);
 }

 put(path: any, object: any) {
    return this.http.put(this.baseUrl + path, object);
 }

 delete(path: any, object: any) {
    console.log(this.baseUrl + path + '?Id=' + object.Id);
    return this.http.delete(this.baseUrl + path + '?Id=' + object.Id);
  }

}
