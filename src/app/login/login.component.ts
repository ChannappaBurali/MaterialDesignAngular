import { Component, OnInit } from '@angular/core';
import { AuthoServiceService } from '../autho-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  validationMessage = '';
  UserName: string;
  Password: string;
 
  constructor(private authenticationService: AuthoServiceService,
    private router: Router) { }

  ngOnInit() {
  }


  public logIn() {
    this.validationMessage = '';
    if (this.UserName && this.Password)    {
    this.authenticationService.login(this.UserName, this.Password).subscribe(res => {
      if (res) {
       this.router.navigate(['/product-list']);
       console.log(res);
      } else {
        this.validationMessage = 'Invalid username and password.';
    }
    }, error => this.validationMessage = error);
    // (error) => {
    //     this.validationMessage = 'Invalid username and password.';
    // });
  }


  }
}
