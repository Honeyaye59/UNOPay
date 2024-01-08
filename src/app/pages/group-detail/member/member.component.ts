import { Component, Input, OnInit} from '@angular/core';
import { users } from '../../../data/users';
import { User } from '../../../models/userModel';
import { relationships } from 'src/app/data/relationship';
import { Relationship } from 'src/app/models/relationshipModel';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit{
  userId: number = 1;
  @Input() memberId!: number;
  memberById: User | undefined;
  relatinships: Relationship[] = [];
  relationship: Relationship | undefined;
  usersId: Array<number> = [];
  moneyToGive: number = 0;
  moneyToReceive: number = 0;

  ngOnInit(): void {
    this.getUserById();
    this.usersId = [this.userId, this.memberId];
    this.getRelationship();
    
  }

  getUserById(){
    this.memberById = users.find(user => user.id === this.memberId)
  }
  getRelationship(){
    this.relationship = relationships.find(relationship =>
      (this.usersId[0] === relationship.usersId[0] && this.usersId[1] === relationship.usersId[1]) ||
      (this.usersId[0] === relationship.usersId[1] && this.usersId[1] === relationship.usersId[0])
    );
    if(this.relationship?.usersId[0] === this.userId){
      if(this.relationship.moneyTransferredToUser1 > this.relationship.moneyTransferredToUser0){
        this.moneyToGive = this.relationship.moneyTransferredToUser1 - this.relationship.moneyTransferredToUser0
      }else {
        this.moneyToReceive = this.relationship.moneyTransferredToUser0 - this.relationship.moneyTransferredToUser1
      }
    }else if (this.relationship?.usersId[1] === this.userId){
      if(this.relationship.moneyTransferredToUser0 > this.relationship.moneyTransferredToUser1){
        this.moneyToGive = this.relationship.moneyTransferredToUser0 - this.relationship.moneyTransferredToUser1
      }else {
        this.moneyToReceive = this.relationship.moneyTransferredToUser1 - this.relationship.moneyTransferredToUser0
      }
    }
  }


}
