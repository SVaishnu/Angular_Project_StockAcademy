import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LessonService } from 'src/app/services/lesson.service';

@Component({
  selector: 'app-text-lesson',
  templateUrl: './text-lesson.component.html',
  styleUrls: ['./text-lesson.component.css']
})
export class TextLessonComponent implements OnInit {
  collection: any = [];
  constructor(private lessonapi: LessonService, private router: Router, private toastr: ToastrService,
    private activeRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.getTextlesson();
  }
  deleteTextlesson(id: number) {
    console.log('========', id)
    if (confirm('Are you sure to delete')) {
      console.log('========', id)
      this.lessonapi.deletetext(id).subscribe(() => {
        this.toastr.success('Textlesson Deleted Succesfully!!...', 'StocksAcademy', {
          timeOut: 1000
        });
        this.getTextlesson();
      })
    } else {
      this.getTextlesson();
    }

  }

  getTextlesson() {
    this.lessonapi.gettextlist().subscribe((result: any) => {
      this.collection = result.data;
    })
  }

  refresh() {
    this.router.navigate(['lesson/Addtextlesson'])
  }

}
