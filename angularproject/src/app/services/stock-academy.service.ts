import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class StockAcademyService {
  baseurl = "http://localhost:3000"


  constructor(private http: HttpClient) { }
  data = JSON.parse(localStorage.getItem('datas') || '{}');
  token = this.data.token
  httpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${this.token}`
  })


  getPartner(){
    return this.http.get("http://localhost:3000/creator/partners", { headers: this.httpHeaders })

  }
  getSubject() {
    return this.http.get("http://localhost:3000/subject", { headers: this.httpHeaders })
  }

  saveChapter(data: any) {
    return this.http.post(this.baseurl + '/chapters', data, { headers: this.httpHeaders })
  }
  getChapterList() {
    return this.http.get("http://localhost:3000/chapters", { headers: this.httpHeaders })
  }

  updateChapter(id: number, data: any) {
    return this.http.put(`http://localhost:3000/chapters/${id}`, data, { headers: this.httpHeaders })
  }
  getCurrentChapter(id: number) {
    return this.http.get(`http://localhost:3000/chapters/${id}`, { headers: this.httpHeaders })
  }

  deleteChapter(id: number) {
    return this.http.delete(`http://localhost:3000/chapter/${id}`, { headers: this.httpHeaders })
  }

  saveAuthor(data: any) {
    return this.http.post(this.baseurl + '/author', data, { headers: this.httpHeaders })
  }

  getAuthorList() {
    return this.http.get("http://localhost:3000/author", { headers: this.httpHeaders })
  }

  saveSponsors(data: any) {
    return this.http.post("http://localhost:3000/sponsors", data, { headers: this.httpHeaders })
  }
  getCurrentSponsors(id: number) {
    return this.http.get(`http://localhost:3000/sponsors/${id}`, { headers: this.httpHeaders })
  }
  updateSponsors(id: number, data: any) {
    return this.http.put(`http://localhost:3000/sponsors/${id}`, data, { headers: this.httpHeaders })
  }


  getSponsorsList() {
    return this.http.get("http://localhost:3000/sponsors", { headers: this.httpHeaders })
  }

  deleteSponsor(id: number) {
    return this.http.delete(`http://localhost:3000/sponsors/${id}`, { headers: this.httpHeaders })
  }

}
