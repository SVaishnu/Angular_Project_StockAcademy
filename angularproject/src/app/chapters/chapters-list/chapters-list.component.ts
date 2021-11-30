import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { StockAcademyService } from 'src/app/services/stock-academy.service';

@Component({
  selector: 'app-chapters-list',
  templateUrl: './chapters-list.component.html',
  styleUrls: ['./chapters-list.component.css']
})
export class ChaptersListComponent implements OnInit {

  collection: any = [];

  constructor(private subservice: StockAcademyService, private router: Router, private toastr: ToastrService, private activeRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.getChapter();

  }

  getChapter() {
    this.subservice.getChapterList().subscribe((result: any) => {
      console.log('result==========', result)
      this.collection = result.data;
    })
  }

  deleteChapters(id: number) {
    if (confirm('Are you sure to delete')) {
      this.subservice.deleteChapter(id).subscribe(() => {
        this.toastr.success('Chapter Deleted Succesfully!!...', 'StocksAcademy', {
          timeOut: 1000
        });
        this.getChapter();
      })
    } else {
      this.getChapter();
    }

  }



  refresh() {
    this.router.navigate(['/chapters/add'])
  }

}
