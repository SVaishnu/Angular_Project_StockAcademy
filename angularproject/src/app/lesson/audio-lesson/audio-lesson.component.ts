import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LessonService } from 'src/app/services/lesson.service';

@Component({
  selector: 'app-audio-lesson',
  templateUrl: './audio-lesson.component.html',
  styleUrls: ['./audio-lesson.component.css']
})
export class AudioLessonComponent implements OnInit {

  audiolesson = new FormGroup({
    name: new FormControl('', Validators.required),
    description: new FormControl('', [Validators.required, Validators.email]),
    deploymentStatus: new FormControl('', [Validators.required, Validators.minLength(26)]),
    authorID: new FormControl('', Validators.required),
    icon: new FormControl('', Validators.required),
    subjectID: new FormControl('', Validators.required),
    chapterID: new FormControl('', Validators.required),
    Audiodata: new FormControl('', Validators.required),
    savedBy: new FormControl('', Validators.required)
  })

  authorlist: any;
  subjectlist: any;
  chapterlist: any;

  constructor(private lessonapi: LessonService, private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getAuthorlist();
    this.getSubjectlist();
  }
  getAuthorlist() {
    this.lessonapi.getAuthor().subscribe((authors: any) => {
      this.authorlist = authors.data;
    })
  }
  getSubjectlist() {
    this.lessonapi.getSubject().subscribe((subject: any) => {
      this.subjectlist = subject.data;
    })
  }

  getChapterwithId(event: any) {
    if (event.target.value > 0) {
      this.lessonapi.getChapter(event.target.value)
      .subscribe((chapter: any) => {
        this.chapterlist = chapter.data;
      })
    }

  }

  saveAudiolesson() {
    this.lessonapi.saveAudio(this.audiolesson.value).subscribe(() => {
      this.toastr.success('Subject Added Succesfully!!...', 'StocksAcademy', {
        timeOut: 1000,
        progressBar: true
      });
      this.audiolesson.reset({})
    }, (err: any) => {
      this.toastr.error('!!...', 'UnAuthorized', {
        timeOut: 1000,
        progressBar: true
      });
    });
  }
  refresh() {
    this.router.navigate(['lesson/Addaudiolesson'])
  }
}
