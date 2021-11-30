import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  constructor(private http: HttpClient) { }
  

  userregister(data: any){
    return this.http.post("http://localhost:3000/users/register", data )

  }

}
