import { Component, Input } from '@angular/core';
import { User } from '../../../models/userModel'

@Component({
  selector: 'app-user-container',
  templateUrl: './user-container.component.html',
  styleUrls: ['./user-container.component.css']
})
export class UserContainerComponent {
  @Input()
  filteredUser!: User;

  @Input()
  groupMembersId: Array<number> = [];

  buttonText: string = '+ Add';
  isAdded: boolean = false;
  onAddClick(): void{
    this.isAdded = !this.isAdded;
    this.buttonText = this.isAdded ? 'Added' : '+  Add';
    if(this.isAdded){
      this.groupMembersId.push(this.filteredUser.id)
      
    }else {
      this.groupMembersId.pop()
    }
   
  }
}
