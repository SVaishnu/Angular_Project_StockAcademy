import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LessonService } from 'src/app/services/lesson.service';

@Component({
  selector: 'app-add-textlesson',
  templateUrl: './add-textlesson.component.html',
  styleUrls: ['./add-textlesson.component.css']
})
export class AddTextlessonComponent implements OnInit {

  textlesson = new FormGroup({
    name: new FormControl('', Validators.required),
    description: new FormControl('', [Validators.required, Validators.email]),
    authorID: new FormControl('', Validators.required),
    icon: new FormControl('', Validators.required),
    subjectID: new FormControl('', Validators.required),
    chapterID: new FormControl('', Validators.required),
    htmlContent: new FormControl('', Validators.required),
    savedBy: new FormControl('', Validators.required)
  })
  authorlist: any;
  subjectlist: any;
  chapterlist: any;
  bindValues: any;
  getActivatedRoute: any;
  chngform: boolean = true;
  constructor(private lessonapi: LessonService, private router: Router, private toastr: ToastrService,
    private activeRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.getSubjectlist();
    this.getAuthorlist();
    this.getActivatedRoute = this.router.url;
    if (this.getActivatedRoute.includes('textlessonupdate')) {

      this.lessonapi.getCurrentTextlesson(this.activeRouter.snapshot.params['id']).subscribe((result: any) => {
        this.bindValues = result.data;
        console.log('value-=========', this.bindValues)
        this.textlesson.patchValue({
          name: this.bindValues.name,
          description: this.bindValues.description,
          authorID: this.bindValues.authorID,
          subjectID: this.bindValues.subjectID,
          chapterID: this.bindValues.chapterID,
          htmlContent: this.bindValues.htmlContent,
          savedBy: this.bindValues.savedBy,
          icon: this.bindValues.icon
        })
        this.chngform = false;
      })
    }
  }

  update() {
    this.lessonapi.updateTextlesson(this.activeRouter.snapshot.params['id'], this.textlesson.value)
      .subscribe((result) => {
        this.toastr.success('Text Lesson updated Succesfully!!...', 'StocksAcademy', {
          timeOut: 1000
        });
        this.textlesson.reset({})
        this.router.navigate(['/lesson/textlesson'])
      }, (err: any) => {
        this.toastr.error('!!...', 'Some went Wrong', {
          timeOut: 1000,
          progressBar: true
        });
      });
  }

  cancle() {
    this.textlesson.reset({})
    this.router.navigate(['/lesson/textlesson'])
    this.chngform = true;
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
  savetextlesson() {
    console.log(this.textlesson.value)
    this.lessonapi.saveText(this.textlesson.value).subscribe(() => {
      this.toastr.success('TextLesson Added Succesfully!!...', 'StocksAcademy', {
        timeOut: 1000,
        progressBar: true
      });
      this.textlesson.reset({})
      this.router.navigate(['/lesson/textlesson'])
    }, (err: any) => {
      this.toastr.error('!!...', 'UnAuthorized', {
        timeOut: 1000,
        progressBar: true
      });
    });
  }

  refresh() {
    this.router.navigate(['lesson/textlesson'])
  }

}
