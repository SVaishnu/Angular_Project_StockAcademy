import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { StockAcademyService } from 'src/app/services/stock-academy.service';

@Component({
  selector: 'app-sponsor-list',
  templateUrl: './sponsor-list.component.html',
  styleUrls: ['./sponsor-list.component.css']
})
export class SponsorListComponent implements OnInit {

  collection: any = [];

  constructor(private stockAcademy: StockAcademyService, private router: Router, private toastr: ToastrService) { }




  ngOnInit(): void {
    this.getSponsors();
  }


  

  getSponsors() {
    this.stockAcademy.getSponsorsList().subscribe((result: any) => {
      this.collection = result.data;
    })
  }

  deleteSponsor(id: number) {
    if (confirm('Are you sure to delete')) {
      this.stockAcademy.deleteSponsor(id).subscribe(() => {
        this.toastr.success('Sponsor Deleted Succesfully!!...', 'StocksAcademy', {
          timeOut: 1000
        });
        this.getSponsors();
      })
    } else {
      this.getSponsors();
    }

  }


  refresh() {
    this.router.navigate(['/sponsor/add'])
  }
}
