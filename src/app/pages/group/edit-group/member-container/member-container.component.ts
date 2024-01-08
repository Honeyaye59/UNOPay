import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/models/userModel';
import { users } from '../../../../data/users';
@Component({
  selector: 'app-member-container',
  templateUrl: './member-container.component.html',
  styleUrls: ['./member-container.component.css']
})
export class MemberContainerComponent implements OnInit{
  @Input() groupMemberId!: number;
  member: User | undefined;
  users: User[] = users;

  ngOnInit(): void {
    this.member = users.find(user => user.id === this.groupMemberId);
  }

  onRemoveClick(){
    console.log("remvoee");
  }
}
