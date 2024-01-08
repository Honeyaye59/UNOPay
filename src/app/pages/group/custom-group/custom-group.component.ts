import { Component, Input, OnInit } from '@angular/core';
import { Group } from '../../../models/groupModel';
import { User } from 'src/app/models/userModel';


@Component({
  selector: 'app-custom-group',
  templateUrl: './custom-group.component.html',
  styleUrls: ['./custom-group.component.css']
})
export class CustomGroupComponent implements OnInit{
  id!: number;
  userId!: number | undefined;
  @Input() group!: Group;
  @Input() user!: User | null;

  ngOnInit(): void {
    // Set the value of 'id' programmatically, for example, you can set it to 1
    this.id = this.group.id;
    this.userId = this.user?.id;
    console.log('userId:', this.userId);
console.log('id:', this.id);
console.log(this.user);
    
  }
  

}

