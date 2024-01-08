import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../../services/shared.service';
import { User } from '../../../models/userModel';
import { users } from 'src/app/data/users';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit{
  
  
  user: User | undefined | null;
  users: User[] = users;

  balance!: number;
  formatBalance!: any;

  selectedCurrency: string = '$'
 constructor(private sharedService: SharedService, private dataService: DataService) {}
 ngOnInit(): void {
  this.sharedService.walletButtonClick.subscribe(() => {
    // Update data in MainContentComponent
    // this.formatBalance = '0';
    // this.getUserById();
    this.updateUserBalance();
    
    
   
  })
  this.sharedService.currencySelected.subscribe((currency) => {
    // Update data in MainContentComponent
    this.selectedCurrency = currency;
  });
  this.dataService.data$.subscribe((data) => {
    this.user = data;
    if(data !== undefined && data !== null){
      this.balance = data.balance;
      
      this.formatBalance = new Intl.NumberFormat().format(this.balance);
    }
    
    
  });
  
}

// getUserById(){
//   this.userById = users.find(user => user.id === this.userId)
// }
updateUserBalance(){

  this.formatBalance = 0;
    if(this.user && this.user.balance !== undefined){
      this.user.balance = 0;
    }
    
}
  
  
// }

}
