import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { StockAcademyService } from 'src/app/services/stock-academy.service';

@Component({
  selector: 'app-add-chapters',
  templateUrl: './add-chapters.component.html',
  styleUrls: ['./add-chapters.component.css']
})
export class AddChaptersComponent implements OnInit {

  alert: boolean = false;
  bindValues: any;
  getActivatedRoute: any;
  collection: any = [];
  chngform: boolean = true;

  constructor(private stockAcademy: StockAcademyService, private router: Router, private toastr: ToastrService, private activeRouter: ActivatedRoute) { }

  addChapter = new FormGroup({
    displayName: new FormControl(''),
    description: new FormControl(''),
    deploymentStatus: new FormControl(''),
    partnerID: new FormControl(''),
    subjectID: new FormControl('')
  })

  partnerlist: any;
  subjectlist: any;


  ngOnInit(): void {
    this.getPartnerlist();
    this.getSubjectlist();

    this.getActivatedRoute = this.router.url;
    if (this.getActivatedRoute.includes('update')) {
      this.stockAcademy.getCurrentChapter(this.activeRouter.snapshot.params['id']).subscribe((result:any) => {
        console.log(result);
        this.bindValues = result.data;
      
        this.addChapter.patchValue({
          displayName: this.bindValues.displayName,
          description: this.bindValues.description,
          deploymentStatus: this.bindValues.deploymentStatus,
          partnerID: this.bindValues.partnerID,
          subjectID: this.bindValues.subjectID,

         
        })
        this.chngform = false;
      })
    }

  }

  getPartnerlist() {
    this.stockAcademy.getPartner().subscribe((partners: any) => {
      console.log( "jjjjjjj====",partners)

      this.partnerlist = partners;

    })
  }

  getSubjectlist() {
    this.stockAcademy.getSubject().subscribe((subject: any) => {
      console.log( subject)

      this.subjectlist = subject.data;

    })
  }

  collectChapter() {
    console.log("=======pp",this.addChapter.value)
    this.stockAcademy.saveChapter(this.addChapter.value).subscribe(() => {
      this.toastr.success('Chapter Added Succesfully!!...', 'StocksAcademy', {
        timeOut: 1000,
        progressBar: true
      });

      console.log("hhh : ", this.addChapter.value);
      this.addChapter.reset({})
      this.router.navigate(['/chapters/list'])


    })
  }


  update() {
    this.stockAcademy.updateChapter(this.activeRouter.snapshot.params['id'], this.addChapter.value).subscribe((result) => {
      console.log('idssss====', this.activeRouter.snapshot.params['id'])
      this.toastr.success('Chapter updated Succesfully!!...', 'StocksAcademy', {
        timeOut: 1000
      });
      this.addChapter.reset({})
      this.router.navigate(['/chapters/list'])
    })
  }

  cancle() {
    this.addChapter.reset({})
    this.router.navigate(['/chapters/list'])
    this.chngform = true;
  }


  refresh() {
    this.router.navigate(['/chapters/list'])
    this.addChapter.reset({})
  }


}
