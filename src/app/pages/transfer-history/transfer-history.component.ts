import { Component, OnInit } from '@angular/core';
import { TransferHistory } from 'src/app/models/transferHistoryModel';
import { transferHistories } from 'src/app/data/tansferHistory';
import { User } from 'src/app/models/userModel';
import { DataService } from 'src/app/services/data.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-transfer-history',
  templateUrl: './transfer-history.component.html',
  styleUrls: ['./transfer-history.component.css']
})
export class TransferHistoryComponent implements OnInit{
  transferHistories: TransferHistory[] = transferHistories;
  transferHistoriesOfTheUser: TransferHistory[] = [];
  transferHistoriesByDate: TransferHistory[] = [];
  user!: User;
  userId!: number;
  selectedDate: string = '';
  isDateSelected: boolean = false;

  constructor( private dataService: DataService, private datePipe: DatePipe) {}

  async ngOnInit(): Promise<void>{
    await this.dataService.data$.subscribe((data) => {
      
      if(data !== undefined && data !== null){
        this.user = data;
        this.userId = this.user.id;
        
      }
      
      
    });
    
    this.transferHistoriesOfTheUser = this.getTransferHistory();

    

    
    
    
  }

  getTransferHistory(){
    return this.transferHistories.filter(history => history.senderId === this.userId || history.receiverId === this.userId)
  }

  onDateChange() {
     //2023-12-05
    //  console.log(this.selectedDate);
    // console.log(this.transferHistoriesOfTheUser);
    //  this.transferHistoriesOfTheUser.forEach(history => {
    //   const originalDate = new Date(history.date);
    //   const formattedDate = this.datePipe.transform(originalDate, 'yyyy-MM-dd');
    //   console.log(formattedDate);
    //  })
     
     this.isDateSelected = true;
     
    //  console.log(this.transferHistoriesOfTheUser);
     this.transferHistoriesByDate = this.transferHistoriesOfTheUser.filter(history => {
      const originalDate = new Date(history.date);
      const formattedDate = this.datePipe.transform(originalDate, 'yyyy-MM-dd');
      
      return formattedDate === this.selectedDate;
     })

     

    

     
    
    // Handle any additional logic when the date changes
  }

}
