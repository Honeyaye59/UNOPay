import { Component, OnInit } from '@angular/core';
// import { UserSearchService } from '../../services/user-search.service'
import { NgForm } from '@angular/forms';
import { User } from '../../models/userModel';
import { Router } from '@angular/router';
import { Group } from '../../models/groupModel';
import { groups } from '../../data/groups';
import { users } from '../../data/users';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-group',
  templateUrl: './create-group.component.html',
  styleUrls: ['./create-group.component.css']
})
export class CreateGroupComponent implements OnInit{
 
  errorMessage: string = '';


  ngOnInit(): void {
    const getUserId = this.route.snapshot.paramMap.get('userId');
    if (getUserId !== null && getUserId !== undefined) {
     
      this.userId = +getUserId;
    }
  }




//   onInputChange(): void {
//     this.filteredUsers = this.filterUsers(this.searchByUsername);
//   }

//   filterUsers(searchTerm: string): { id: number; username: string; profilePicture: string }[] {
//     const normalizedSearchTerm = searchTerm.toLowerCase();
//     return this.users.filter(
//       (user) => user.username.toLowerCase().startsWith(normalizedSearchTerm)
//     );
//   }

  // onSubmit(createNewGroupForm: NgForm){
   
    // console.log(registerForm.form.valid);
    // console.log(registerForm.value);
    // this.router.navigate(['/home']);
    
    
//  }
userId!: number;
constructor(private router: Router, private route: ActivatedRoute) {}
usernameInput: string = '';
 groupMembersId: Array<number> = [
  // This is user's own id
  this.userId,
 ];
groups: Group[] = groups;
users: User[] = users;

filteredUsers: User[] = [];

  filterUsers(searchTerm: string): void {
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    this.filteredUsers = this.users.filter(user => 
      user.username.toLowerCase().startsWith(lowerCaseSearchTerm)
    );
    
  }

  

 

  onSubmit(createNewGroupForm: NgForm): void {
    // Do something with the form data, e.g., send it to the server
    console.log('Form submitted:', createNewGroupForm.value);
    
    // Redirect to home after submission
    // this.router.navigate(['/home']);
    
    if(createNewGroupForm.value.groupname !== ''){
      
      const newGroup = {
        id: this.groups.length + 1,
        groupname: createNewGroupForm.value.groupname,
        membersId: this.groupMembersId
      }

      this.groups.push(newGroup)
      this.router.navigate(['/groups']);
    }
    if(createNewGroupForm.value.groupname === ''){
      this.errorMessage = 'Please Enter Group Name'
    }
    console.log(groups);
  }
  
  
}

