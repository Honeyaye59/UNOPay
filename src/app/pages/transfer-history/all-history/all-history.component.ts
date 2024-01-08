import { Component, Input, OnInit } from '@angular/core';
import { TransferHistory } from 'src/app/models/transferHistoryModel';
import { users } from 'src/app/data/users';
import { User } from '../../../models/userModel';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-all-history',
  templateUrl: './all-history.component.html',
  styleUrls: ['./all-history.component.css']
})
export class AllHistoryComponent implements OnInit{
  
  @Input() transferHistory!: TransferHistory;
  senderName: string | undefined = '';
  receiverName: string | undefined = '';
  amount: number = 0;
  userId: number = 1;
  users: User[] = users;
  @Input() selectedDate: string | null = ''; 
  @Input() isDateSelected!: boolean;
  formattedDate!: string | null;
  
  
  constructor(private datePipe: DatePipe) {};
  // formattedDate!: string | null;
  formattedDateToDisplay!: string | null;

  

  isTransferTo: boolean = false;
  isTransferFrom: boolean = false;

  

  ngOnInit(): void {
    
    if(this.transferHistory.senderId === this.userId){
      this.isTransferTo = true;
      this.receiverName = this.getReceiverName();
    }else if(this.transferHistory.receiverId === this.userId){
      this.isTransferFrom = true;
      this.senderName = this.getSenderName();
    }

    this.amount = this.transferHistory.amount;
    const transferDate: Date = this.transferHistory.date;
    
    
    // const parsedDate = new Date(this.formattedDateToDisplay);
    // this.formattedDate = 
    const parsedDate = new Date(transferDate);
    this.formattedDate = this.datePipe.transform(parsedDate, 'yyyy-MM-dd');
    this.formattedDateToDisplay= this.datePipe.transform(transferDate, 'medium'); 

    
    

   
    
    
    
  }

  getSenderName(){
    const senderId = this.transferHistory.senderId;
    const sender = users.find(user => user.id === senderId);
    return sender?.displayname
  }
  getReceiverName(){
    const receiverId = this.transferHistory.receiverId;
    const receiver = users.find(user => user.id === receiverId);
    return receiver?.displayname
  }

}
