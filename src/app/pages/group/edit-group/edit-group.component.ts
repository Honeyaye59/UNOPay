import { Component, OnInit } from '@angular/core';
import { User } from '../../../models/userModel';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute } from '@angular/router';
import { Group } from '../../../models/groupModel';
import { groups } from '../../../data/groups';


@Component({
  selector: 'app-edit-group',
  templateUrl: './edit-group.component.html',
  styleUrls: ['./edit-group.component.css']
})
export class EditGroupComponent implements OnInit {

  user: User | undefined | null;
  groupId!: number;
  groupById: any;
  groups: Group[] = groups;
  groupMembersId: Array<number> = [];
  membersIdRemovedUserId: Array<number> = [];

  groupnameInput: string = '';

  constructor(private route: ActivatedRoute, private dataService: DataService) { 

   
  }

  ngOnInit(): void {
    const getGroupId = this.route.snapshot.paramMap.get('id');
    if (getGroupId !== null && getGroupId !== undefined) {
     
      this.groupId = +getGroupId;
    }

    this.groupById = groups.find(group => group.id === this.groupId);
    if(this.groupById){
      
      this.groupMembersId = this.groupById.membersId;
       this.membersIdRemovedUserId = this.groupMembersId.filter(id => id !== this.user?.id);
      
    }

    this.dataService.data$.subscribe((data) => {
      
      if(data !== undefined && data !== null){
        this.user = data;
        console.log(this.user);
      }
      
      
    });

    
  }
 

  onClick(){

  }
}
