import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LessonService } from 'src/app/services/lesson.service';

@Component({
  selector: 'app-add-videolesson',
  templateUrl: './add-videolesson.component.html',
  styleUrls: ['./add-videolesson.component.css']
})
export class AddVideolessonComponent implements OnInit {

  videolesson = new FormGroup({
    name: new FormControl('', Validators.required),
    description: new FormControl('', [Validators.required, Validators.email]),
    deploymentStatus: new FormControl('', [Validators.required, Validators.minLength(26)]),
    authorID: new FormControl('', Validators.required),
    icon: new FormControl('', Validators.required),
    subjectID: new FormControl('', Validators.required),
    chapterID: new FormControl('', Validators.required),
    videoURL: new FormControl('', Validators.required),
    savedBy: new FormControl('', Validators.required)
  })

  authorlist: any;
  subjectlist: any;
  chapterlist: any;
  bindValues: any;
  getActivatedRoute: any;
  chngform: boolean = true;
  constructor(private lessonapi: LessonService, private router: Router, private toastr: ToastrService, private activeRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.getAuthorlist();
    this.getSubjectlist();
    this.getActivatedRoute = this.router.url;
    if (this.getActivatedRoute.includes('videolessonupdate')) {
      this.lessonapi.getCurrentVideolesson(this.activeRouter.snapshot.params['id']).subscribe((result: any) => {
        console.log('value-=========', result)
        this.bindValues = result;
        this.videolesson.patchValue({
          name: this.bindValues.name,
          description: this.bindValues.description,
          authorID: this.bindValues.authorID,
          subjectID: this.bindValues.subjectID,
          chapterID: this.bindValues.chapterID,
          videoURL: this.bindValues.videoURL,
          savedBy: this.bindValues.savedBy,
          icon: this.bindValues.icon
        })
        this.chngform = false;
      })
    }
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
    let value = event.target.value;
    this.lessonapi.getChapter(value).subscribe((chapter: any) => {
      if (chapter.data.length > 0) {
        this.chapterlist = chapter.data;
      }
    })
  }

  saveVideolesson() {
    this.lessonapi.saveVideo(this.videolesson.value).subscribe(() => {
      this.toastr.success('VideoLesson Added Succesfully!!...', 'StocksAcademy', {
        timeOut: 1000,
        progressBar: true
      });
      this.videolesson.reset({});
      this.router.navigate(['/lesson/videolesson'])
    }, (err: any) => {
      this.toastr.error('!!...', 'UnAuthorized', {
        timeOut: 1000,
        progressBar: true
      });
    });
  }
  refresh() {
    this.router.navigate(['lesson/videolesson'])
  }

  cancle() {
    this.videolesson.reset({})
    this.router.navigate(['/lesson/videolesson'])
    this.chngform = true;
  }

  update() {
    this.lessonapi.updateVideolesson(this.activeRouter.snapshot.params['id'], this.videolesson.value)
      .subscribe((result) => {
        this.toastr.success('Video Lesson updated Succesfully!!...', 'StocksAcademy', {
          timeOut: 1000
        });
        this.videolesson.reset({})
        this.router.navigate(['/lesson/videolesson'])

      }, (err: any) => {
        this.toastr.error('!!...', 'Some went Wrong', {
          timeOut: 1000,
          progressBar: true
        });
      });
  }
}
