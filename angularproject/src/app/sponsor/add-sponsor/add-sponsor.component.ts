import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { StockAcademyService } from 'src/app/services/stock-academy.service';

@Component({
  selector: 'app-add-sponsor',
  templateUrl: './add-sponsor.component.html',
  styleUrls: ['./add-sponsor.component.css']
})
export class AddSponsorComponent implements OnInit {

  alert: boolean = false;
  bindValues: any;
  getActivatedRoute: any;
  collection: any = [];
  chngform: boolean = true;

  constructor(private stockAcademy: StockAcademyService, private router: Router, private toastr: ToastrService, private activeRouter: ActivatedRoute) { }


  addSponsors = new FormGroup({
    icon: new FormControl(''),
    name: new FormControl(''),
    description: new FormControl('')
  })



  ngOnInit(): void {
    this.getActivatedRoute = this.router.url;
    if (this.getActivatedRoute.includes('update')) {
      this.stockAcademy.getCurrentSponsors(this.activeRouter.snapshot.params['id']).subscribe((result:any) => {
        console.log(result);
        this.bindValues = result.data;
      
        this.addSponsors.patchValue({
          icon: this.bindValues.icon,

          name: this.bindValues.name,
          description: this.bindValues.description,
         
        })
        this.chngform = false;
      })
    }
  }

  collectSponsors() {
    this.stockAcademy.saveSponsors(this.addSponsors.value).subscribe(() => {
      this.toastr.success('Sponser added Succesfully!!...', '', {
        timeOut: 1000,
        progressBar: true
      });
      this.addSponsors.reset({});
      this.router.navigate(['/sponsor/list'])

     // this.getSponsors();
    })
  }

  update() {
    this.stockAcademy.updateSponsors(this.activeRouter.snapshot.params['id'], this.addSponsors.value).subscribe((result) => {
      console.log('idssss====', this.activeRouter.snapshot.params['id'])
      this.toastr.success('Sponsor updated Succesfully!!...', 'StocksAcademy', {
        timeOut: 1000
      });
      this.addSponsors.reset({})
      this.router.navigate(['/sponsor/list'])
    })
  }
  
  cancle() {
    this.addSponsors.reset({})
    this.router.navigate(['/sponsor/list'])
    this.chngform = true;
  }

  refresh() {
    this.router.navigate(['/sponsor/list'])
  }


}
