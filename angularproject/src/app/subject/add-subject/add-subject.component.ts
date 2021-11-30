import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SubjectService } from 'src/app/services/subject.service';

@Component({
  selector: 'app-add-subject',
  templateUrl: './add-subject.component.html',
  styleUrls: ['./add-subject.component.css']
})
export class AddSubjectComponent implements OnInit {

  addSubject = new FormGroup({
    displayName: new FormControl('', Validators.required),
    description: new FormControl('', [Validators.required, Validators.email]),
    deploymentStatus: new FormControl('', [Validators.required, Validators.minLength(26)]),
    type: new FormControl('', Validators.required),
    icon: new FormControl('', Validators.required),
  })
  bindValues: any;
  getActivatedRoute: any;
  collection: any = [];
  chngform: boolean = true;
  constructor(private router: Router, private subservice: SubjectService, private toastr: ToastrService, private activeRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.getActivatedRoute = this.router.url;
    if (this.getActivatedRoute.includes('update')) {
      this.subservice.getCurrentSubject(this.activeRouter.snapshot.params['id']).subscribe((result) => {
        this.bindValues = result;
        this.addSubject.patchValue({
          displayName: this.bindValues.displayName,
          description: this.bindValues.description,
          deploymentStatus: this.bindValues.deploymentStatus,
          type: this.bindValues.type,
          icon: this.bindValues.icon
        })
        this.chngform = false;
      })
    }
  }
  saveSubject() {
    this.subservice.addSubject(this.addSubject.value).subscribe(() => {
      this.toastr.success('Subject Added Succesfully!!...', 'StocksAcademy', {
        timeOut: 1000,
        progressBar: true
      });
      this.addSubject.reset({})
    }, (err: any) => {
      this.toastr.error('error', 'UnAuthorized', {
        timeOut: 1000,
        progressBar: true
      });
    });
  }

  update() {
    this.subservice.updateSubject(this.activeRouter.snapshot.params['id'], this.addSubject.value).subscribe((result) => {
      this.toastr.success('Subject updated Succesfully!!...', 'StocksAcademy', {
        timeOut: 1000
      });
      this.addSubject.reset({})
      this.router.navigate(['/subject/Subjectlist'])
    })
  }
  cancle() {
    this.addSubject.reset({})
    this.router.navigate(['/subject/Subjectlist'])
    this.chngform = true;
  }
  refresh() {
    this.router.navigate(['/subject/Subjectlist'])
    this.addSubject.reset({})
  }
  getimage(event: any) {
    let me = this;
    let file = event.target.files[0];
    if (event.target.files[0].type === 'image/jpeg' ||
      event.target.files[0].type === 'image/png' ||
      event.target.files[0].type === 'image/jpg') {
      // if (event.target.files[0].size < 200 * 200) {/* Checking height * width*/
      if (event.target.files[0].size < 500000) {/* checking size here - 2MB */
        // let reader = new FileReader();
        // reader.readAsDataURL(file);
        // reader.onload = function () {
        //   console.log('msg===========', reader.result);
        let encode = btoa(file)
        console.log('string========', encode)
        if (encode) {
          let someva = atob(encode)
          console.log('string========', someva)

        }

        // me.addSubject.patchValue({
        //   icon: reader.result
        // })
      } else {
        console.log('image is to large123')
        me.addSubject.reset({});
      }
    } else {
      console.log('image is to large123')
      me.addSubject.reset({});
    }
    // } else {
    //   console.log('image is to large')
    //   me.addSubject.reset({});
    // }
    // } else {
    // console.log('image type not valid')
    // me.addSubject.reset({});

  }


}