import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SubjectService } from 'src/app/services/subject.service';

@Component({
  selector: 'app-subject-list',
  templateUrl: './subject-list.component.html',
  styleUrls: ['./subject-list.component.css']
})
export class SubjectListComponent implements OnInit {

  collection: any = [];
  constructor(private router: Router, private subservice: SubjectService, private toastr: ToastrService, private activeRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.getSubject();
  }

  getSubject() {
    this.subservice.getSubjectlist().subscribe((result: any) => {
      this.collection = result.data;
    })
  }

  deleteSubject(id: number) {
    if (confirm('Are you sure to delete')) {
      this.subservice.deleteSub(id).subscribe((res: any) => {
        console.log(res)
        if (res.success == true) {
          this.toastr.success('Subject Deleted Succesfully!!...', 'StocksAcademy', {
            timeOut: 2000
          });
          this.getSubject();
        } else {
          this.toastr.error(res.message, 'StocksAcademy', {
            timeOut: 2000
          });
          this.getSubject();
        }
      })
    } else {
      this.getSubject();
    }

  }

  refresh() {
    this.router.navigate(['/subject/Addsubject'])
    // this.addSubject.reset({})
  }
}
