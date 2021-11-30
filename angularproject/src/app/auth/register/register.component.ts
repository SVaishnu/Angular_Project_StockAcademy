import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { RegisterService } from 'src/app/services/register.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private register: RegisterService , private toastr: ToastrService, private router:Router) { }

  ngOnInit(): void {
  }
  registerData = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  })
  
  registerUser() {
    console.log(this.registerData.value)
    this.register.userregister(this.registerData.value).subscribe((result: any) => {
      this.toastr.success('User added Succesfully!!...', '', {
        timeOut: 1000,
        progressBar: true
      });
      this.registerData.reset({});
      this.router.navigate(['/']);
    })
    



    
  }
}
