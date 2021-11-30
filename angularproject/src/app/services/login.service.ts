import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  authenticate = false;
  username = '';
  constructor(private http: HttpClient, private router: Router, private toastr: ToastrService) { }
  userlogin(data: any) {
    this.http.post("http://localhost:3000/users/login", data).subscribe((result: any) => {
      localStorage.setItem("datas", JSON.stringify(result));
      const user = result;
      if (!user) {
        this.toastr.success('please check username and password !!...', 'StocksAcademy', {
          timeOut: 1500,
          progressBar: true
        });
        this.authenticate = false;
      } else {
        this.toastr.success('Logged in Succesfully!!...', 'StocksAcademy', {
          timeOut: 1500,
          progressBar: true
        });
        this.username = user.user.personalData.name;
        this.authenticate = true;
        this.router.navigate(['/home'])
      }
    }, (err: any) => {
      this.toastr.error('Something went wrong!!...', 'StocksAcademy', {
        timeOut: 1500,
        progressBar: true
      });
    }
    );
  }
  logOut() {
    this.authenticate = false;
    this.router.navigate(['/'])
    localStorage.removeItem("datas");
    this.toastr.success('Logged Out Succesfully!!...', 'StocksAcademy', {
      timeOut: 1500,
      progressBar: true
    });

  }
}
