import { Component } from '@angular/core';
// import { WebRequestService } from 'src/app/services/web-request.service';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/models/userModel';
import { Router } from '@angular/router';
import { users } from '../../data/users';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  users: User[] = [];
  
  errorMessage: string = "";

  constructor(private router: Router){}

  onSubmit(registerForm: NgForm){
   
   console.log(registerForm.form.valid);
   console.log(registerForm.value);

   const registeredUserId = users.length + 1;
   const registeredUser = Object.assign({id: registeredUserId}, registerForm.value, {profilePicture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThZBo3vBgu86HsMWuqTpGj8oHg7CE7S5lIZw&usqp=CAU'});
   users.push(registeredUser);
   
   this.router.navigate(['/home']);
   
   
}
}

