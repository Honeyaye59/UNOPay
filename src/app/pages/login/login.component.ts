import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { users } from '../../data/users';
import { User } from '../../models/userModel';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  errorMessage: string = '';
  constructor(private router: Router){}

  onSubmit(registerForm: NgForm){
   
    console.log(registerForm.form.valid);
    console.log(registerForm.value);
    const inputEmail = registerForm.value.email;
    const inputPassword = registerForm.value.password;
    const user = users.find(user => user.email === inputEmail);

    if(user){
      if(user.password === inputPassword){
        const loginUserId = user.id;
        this.router.navigate([`/${loginUserId}/home`]);
      }else {
        this.errorMessage = '* Email and Password do not match'
      }
      
    }else {
      this.errorMessage = '* User Not Found, Try with another email'
    }
    
    
    
    
    
 }

}
