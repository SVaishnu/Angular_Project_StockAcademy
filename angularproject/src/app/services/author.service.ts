import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  constructor(private http: HttpClient) { }
  data = JSON.parse(localStorage.getItem('datas') || '{}');
  token = this.data.token
  httpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${this.token}`
  })
  getAuthorList() {
    return this.http.get("http://localhost:3000/author", { headers: this.httpHeaders })
  }

  saveAuthor(data: any) {
    return this.http.post("http://localhost:3000/author" ,  data, { headers: this.httpHeaders })
  }
  deleteAuthor(id: number) {
    return this.http.delete(`http://localhost:3000/author/${id}`, { headers: this.httpHeaders })
  }
  getCurrentAuthor(id: number) {
    return this.http.get(`http://localhost:3000/author/${id}`, { headers: this.httpHeaders })
  }

  updateAuthor(id: number, data: any) {
    return this.http.put(`http://localhost:3000/author/${id}`, data, { headers: this.httpHeaders })
  }
}
