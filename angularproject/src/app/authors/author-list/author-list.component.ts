import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthorService } from 'src/app/services/author.service';

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.css']
})
export class AuthorListComponent implements OnInit {

  collection: any = [];

  constructor(private subservice: AuthorService, private router: Router,   private toastr: ToastrService, private activeRouter: ActivatedRoute) { }

   

  ngOnInit(): void {
    this.getAuthor();
    
  }

 

  getAuthor() {
    this.subservice.getAuthorList().subscribe((result: any) => {
      this.collection = result.data;
    })
  }

  deleteAuthor(id: number) {
    if (confirm('Are you sure to delete')) {
      this.subservice.deleteAuthor(id).subscribe(() => {
        this.toastr.success('Author Deleted Succesfully!!...', 'StocksAcademy', {
          timeOut: 1000
        });
        this.getAuthor();
      })
    } else {
      this.getAuthor();
    }

  }

  

  refresh() {
    this.router.navigate(['/authors/add'])
  }
}
