import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {LoginService} from "../services/login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sign-up-user',
  templateUrl: './sign-up-user.component.html',
  styleUrls: ['./sign-up-user.component.scss']
})
export class SignUpUserComponent implements OnInit {
  userFromGroup:FormGroup;
  constructor(private fb:FormBuilder,private loginService:LoginService,private router:Router) { }
  ngOnInit(): void {
    this.intializeForm();
  }

  intializeForm(){
    this.userFromGroup = this.fb.group({
      username: ['',[Validators.required]],
      password: ['',[Validators.required]],
    });
  }
  userSignUp: any[] = [];
  signUpObj: any = {
    userName: '',
    email: '',
    userId: '',
    password: '',
  };
  loginObj: any = {
    userName: '',
    userId: '',
    password: '',
  };

  login() {
    console.log(this.userFromGroup.value);
    this.loginService.login(this.userFromGroup.value).subscribe((res) => {
      localStorage.setItem('token',res.body['accessToken']);
      this.loginService.isUserLoggedIn.next(this.loginService.isLoggedIn());
      this.router.navigate(['/assets']);
    });
  }
}
