import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LessonService {

  constructor(private http: HttpClient) { }
  data = JSON.parse(localStorage.getItem('datas') || '{}');
  token = this.data.token
  httpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${this.token}`
  })
  baseUrl = "http://localhost:3000/"
  getAuthor() {
    return this.http.get(this.baseUrl + "author/", { headers: this.httpHeaders })
  }

  getSubject() {
    return this.http.get(this.baseUrl + "subject", { headers: this.httpHeaders })
  }
  getChapter(id: any) {
    return this.http.get(this.baseUrl + `chapterlistwithSubject/${id}`, { headers: this.httpHeaders })
  }
  saveAudio(data: any) {
    return this.http.post(this.baseUrl + "audioLesson/", data, { headers: this.httpHeaders })
  }

  saveVideo(data: any) {
    return this.http.post(this.baseUrl + "videoLessons/", data, { headers: this.httpHeaders })
  }

  saveText(data: any) {
    return this.http.post(this.baseUrl + "textLesson/", data, { headers: this.httpHeaders })
  }

  gettextlist() {
    return this.http.get(this.baseUrl + "textLesson/", { headers: this.httpHeaders })
  }
  getvideolist() {
    return this.http.get(this.baseUrl + "videolessons/", { headers: this.httpHeaders })
  }
  deletetext(id: number) {
    return this.http.delete(this.baseUrl + `textLesson/${id}`, { headers: this.httpHeaders })
  }

  getCurrentTextlesson(id: number) {
    return this.http.get(this.baseUrl + `textLesson/${id}`, { headers: this.httpHeaders })
  }

  updateTextlesson(id: number, data: any) {
    return this.http.put(this.baseUrl + `textLesson/${id}`, data, { headers: this.httpHeaders })
  }

  deletevideo(id: number) {
    return this.http.delete(this.baseUrl + `videoLessons/${id}`, { headers: this.httpHeaders })
  }

  getCurrentVideolesson(id: number) {
    return this.http.get(this.baseUrl + `videoLessons/${id}`, { headers: this.httpHeaders })
  }
  updateVideolesson(id: number, data: any) {
    return this.http.put(this.baseUrl + `videoLessons/${id}`, data, { headers: this.httpHeaders })
  }
}
