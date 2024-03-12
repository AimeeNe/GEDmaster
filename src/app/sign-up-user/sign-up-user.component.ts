import { Component } from '@angular/core';

@Component({
  selector: 'app-sign-up-user',
  templateUrl: './sign-up-user.component.html',
  styleUrls: ['./sign-up-user.component.scss']
})
export class SignUpUserComponent {
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
}
