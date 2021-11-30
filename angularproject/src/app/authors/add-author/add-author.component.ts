import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthorService } from 'src/app/services/author.service';

@Component({
  selector: 'app-add-author',
  templateUrl: './add-author.component.html',
  styleUrls: ['./add-author.component.css']
})
export class AddAuthorComponent implements OnInit {

  alert: boolean = false;
  bindValues: any;
  getActivatedRoute: any;
  collection: any = [];
  chngform: boolean = true;

  constructor(private subservice: AuthorService, private router: Router,   private toastr: ToastrService, private activeRouter: ActivatedRoute) { }

  addAuthor = new FormGroup({
    profilePicture: new FormControl(''),
    name: new FormControl(''),
    description: new FormControl('')
  })

  ngOnInit(): void {
    this.getActivatedRoute = this.router.url;
    if (this.getActivatedRoute.includes('update')) {
      this.subservice.getCurrentAuthor(this.activeRouter.snapshot.params['id']).subscribe((result:any) => {
        console.log(result);
        this.bindValues = result.data;
      
        this.addAuthor.patchValue({
          profilePicture: this.bindValues.profilePicture,

          name: this.bindValues.name,
          description: this.bindValues.description,
         
        })
        this.chngform = false;
      })
    }
  }

  collectAuhtor() {
    this.subservice.saveAuthor(this.addAuthor.value).subscribe(() => {
      this.toastr.success('Author Added Succesfully!!...', 'StocksAcademy', {
        timeOut: 1000,
        progressBar: true
      });
      console.log("hhh : ", this.addAuthor.value);
      this.addAuthor.reset({});
      this.router.navigate(['/authors/list'])
    })
  }

 

  

  update() {
    this.subservice.updateAuthor(this.activeRouter.snapshot.params['id'], this.addAuthor.value).subscribe((result) => {
      console.log('idssss====', this.activeRouter.snapshot.params['id'])
      this.toastr.success('Author updated Succesfully!!...', 'StocksAcademy', {
        timeOut: 1000
      });
      this.addAuthor.reset({})
      this.router.navigate(['/authors/list'])
    })
  }
  cancle() {
    this.addAuthor.reset({})
    this.router.navigate(['/authors/list'])
    this.chngform = true;
  }



  refresh() {
    this.router.navigate(['/authors/list'])
    this.addAuthor.reset({})
  }

}
