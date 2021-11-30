import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  constructor(private http: HttpClient) { }
  data = JSON.parse(localStorage.getItem('datas') || '{}');
  token = this.data.token
  httpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${this.token}`
  })
  // baseUrl = "https://stocks-acadmey-dev-avlpe.ondigitalocean.app/"
  baseUrl = "http://localhost:3000/"
  getSubjectlist() {
    return this.http.get(this.baseUrl + "subject", { headers: this.httpHeaders })
  }
  addSubject(data: any) {
    return this.http.post(this.baseUrl + "subject", data, { headers: this.httpHeaders })
  }
  deleteSub(id: number) {
    console.log(id)
    return this.http.delete(this.baseUrl + `subject/${id}`, { headers: this.httpHeaders })
  }
  getCurrentSubject(id: number) {
    return this.http.get(this.baseUrl + `subjectWithChapters/${id}`, { headers: this.httpHeaders })
  }

  updateSubject(id: number, data: any) {
    return this.http.put(this.baseUrl + `subject/${id}`, data, { headers: this.httpHeaders })
  }
}
