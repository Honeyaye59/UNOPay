import { Component, Input, EventEmitter, Output  } from '@angular/core';

import { User } from '../../../models/userModel'

@Component({
  selector: 'app-other-member',
  templateUrl: './other-member.component.html',
  styleUrls: ['./other-member.component.css']
})
export class OtherMemberComponent {
  @Input()
  filteredUser!: User;

  @Input()
  groupMembersId: Array<number> = [];

  @Output() userClicked: EventEmitter<User> = new EventEmitter<User>();

  onClick(user: User): void {
    // Emit the user data when the div is clicked
    this.userClicked.emit(user);
  }

  
  
}
