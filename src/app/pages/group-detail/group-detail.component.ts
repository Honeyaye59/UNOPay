import { Component, OnInit  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Group } from '../../models/groupModel';
import { groups } from '../../data/groups';
import { users } from '../../data/users';
import { User } from '../../models/userModel';
import { TransferHistory } from 'src/app/models/transferHistoryModel';
import { transferHistories } from '../../data/tansferHistory';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-group-detail',
  templateUrl: './group-detail.component.html',
  styleUrls: ['./group-detail.component.css']
})
export class GroupDetailComponent implements OnInit {
  userId: number = 1;
  userById: any;
  user: User | undefined | null;
  groupId!: number;
  groupById: any;
  groupMembersId: Array<number> = [];
  membersIdRemovedUserId: Array<number> = [];
  
  groups: Group[] = groups;

  constructor(private route: ActivatedRoute, private dataService: DataService) { }

  ngOnInit(): void {
    const getGroupId = this.route.snapshot.paramMap.get('id');
    if (getGroupId !== null && getGroupId !== undefined) {
     
      this.groupId = +getGroupId;
    }

    this.groupById = groups.find(group => group.id === this.groupId);
    if(this.groupById){
      
      this.groupMembersId = this.groupById.membersId;
       this.membersIdRemovedUserId = this.groupMembersId.filter(id => id !== this.userId);
      
    }


    

    this.getUserById()

    this.filterTransferHistory();

    this.dataService.data$.subscribe((data) => {
      
      if(data !== undefined && data !== null){
        this.user = data;
        console.log(this.user);
      }
      
      
    });

    
   
     

    
  }

  

  getUserById() {
    this.userById = users.find(user => user.id === this.userId)
  }

  // Transfer Section
  transferHistories: TransferHistory[] = transferHistories;
  transferHistoriesOfTheGroup: TransferHistory[] = [];

  

  filterTransferHistory(){
    this.transferHistoriesOfTheGroup = transferHistories.filter(history => history.groupId === this.groupId)
  }

}
