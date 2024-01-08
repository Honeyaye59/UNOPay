import { Component, OnInit } from '@angular/core';
import { Group } from '../../models/groupModel';
// import { userGroups } from 'src/app/data/userGroups';
import { DataService } from 'src/app/services/data.service';
import { User} from '../../models/userModel';
import { groups } from 'src/app/data/groups';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})

export class GroupComponent implements OnInit{
  user!: User | null;
  userGroups: Group[] = [];
  groups: Group[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.groups = groups;
    this.dataService.data$.subscribe((data) => {
      this.user = data;
      if(data !== undefined && data !== null){
        this.userGroups = groups.filter(group => group.membersId.some(memberId => memberId === this.user?.id));

      }
      
      
    });
  }
  

  
  
}


