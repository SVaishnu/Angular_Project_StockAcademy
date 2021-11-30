import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LessonService } from 'src/app/services/lesson.service';

@Component({
  selector: 'app-video-lesson',
  templateUrl: './video-lesson.component.html',
  styleUrls: ['./video-lesson.component.css']
})
export class VideoLessonComponent implements OnInit {

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
  collection: any = [];
  bindValues: any;
  getActivatedRoute: any;
  chngform: boolean = true;
  constructor(private lessonapi: LessonService, private router: Router, private toastr: ToastrService, private activeRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.getVideolesson();
  }

  getVideolesson() {
    this.lessonapi.getvideolist().subscribe((result: any) => {
      console.log(result.data)
      this.collection = result.data;
    })
  }

  deleteVideolesson(id: number) {
    if (confirm('Are you sure to delete')) {
      this.lessonapi.deletevideo(id).subscribe(() => {
        this.toastr.success('Videolesson Deleted Succesfully!!...', 'StocksAcademy', {
          timeOut: 1000
        });
        this.getVideolesson();
      })
    } else {
      this.getVideolesson();
    }
  }

  refresh() {
    this.router.navigate(['lesson/Addvideolesson'])
  }

}
