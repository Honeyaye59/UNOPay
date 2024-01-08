import { Component, OnInit } from '@angular/core';
import { users } from '../../data/users';
import { NgForm } from '@angular/forms';
import { User } from '../../models/userModel';
import { relationships } from 'src/app/data/relationship';
import { Relationship } from 'src/app/models/relationshipModel';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { PopupService } from '../../services/popup.service';


@Component({
  selector: 'app-transfer-to',
  templateUrl: './transfer-to.component.html',
  styleUrls: ['./transfer-to.component.css']
})
export class TransferToComponent implements OnInit {
  
  constructor(private router: Router, private dataService: DataService, private popupService: PopupService) { }

  ngOnInit(): void {
    this.dataService.data$.subscribe((data) => {
      
      if(data !== undefined && data !== null){
        this.user = data;
        this.userId = this.user.id;
        console.log(this.user);
      }
      
      
    });
    
  }
  user!: User;
  userId: number = 1;
  otherMemberId!: number;
  users: User[] = users;
  relationships: Relationship[] = relationships;
  usernameInput: string = '';
  amountInput: any = '';
  filteredUsers: User[] = [];
  isInputsValid: boolean = this.validateInputs();
  // errorMessage: string = '';
  filterUsers(): void {
    // this.filteredUsers = this.users.filter(user =>
    //   user.username.toLowerCase().includes(this.usernameInput.toLowerCase())
    // );
    this.filteredUsers = this.users.filter(user =>
      user.username.toLowerCase().startsWith(this.usernameInput.toLowerCase())
    );
  }

  onUserClick(userData: User): void {
    this.usernameInput = userData.username
    this.otherMemberId = userData.id;
    // Do something with the user data in the parent component
  }

  

  transferMoney(){
    
    
    const sender = this.users.find(user => user.id === this.userId);
    const receiver = this.users.find(user => user.id === this.otherMemberId);
    if (sender && receiver) {
      sender.balance -= this.amountInput * 1;
      receiver.balance += this.amountInput * 1;

      const usersId = [sender.id, receiver.id];
      const existRelationship = relationships.find(relationship =>
        (usersId[0] === relationship.usersId[0] && usersId[1] === relationship.usersId[1]) ||
        (usersId[0] === relationship.usersId[1] && usersId[1] === relationship.usersId[0])
      );
     if(!existRelationship){
      // const user0Id = usersId[0];
      // const user1Id = usersId[1];
      const isUser0Sender: boolean = usersId[0] === this.userId ? true : false;
      const newRelationship = {
        usersId,
        moneyTransferredToUser0: !isUser0Sender ? this.amountInput * 1 : 0,
        moneyTransferredToUser1: isUser0Sender ? this.amountInput * 1 : 0
      }
      relationships.push(newRelationship)
      console.log(newRelationship);
      console.log(relationships);
     }else {
      // if (existRelationship.usersId[0] === this.userId) {
      //   existRelationship.moneyTransferredToUser1 += this.amountInput;
      // } else if (existRelationship.usersId[1] === this.userId) {
      //   existRelationship.moneyTransferredToUser0 += this.amountInput;
      // }
      const isUser0Sender: boolean = existRelationship.usersId[0] === this.userId ? true : false;
      existRelationship.moneyTransferredToUser0 += !isUser0Sender ? this.amountInput * 1 : 0;
      existRelationship.moneyTransferredToUser1 += isUser0Sender ? this.amountInput * 1 : 0;
      
    }
     
     
      
      }

      // this.openPopup(receiver, this.amountInput)
      // this.router.navigate(['/home']);
      
      console.log("done");


     }

     validateInputs(){
      if(isNaN(+this.amountInput) || this.usernameInput === ''){
        return false
      }else {
        return true;
      }
     }

    //  openPopup(receiver: any, amount: any): void {
    //   this.popupService.openPopup(receiver, amount);
    // }

   
      
    }
  


