import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/userModel';
import { users } from 'src/app/data/users';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit{
  menuOpen = false;
  userId!: number;
  constructor(private route: ActivatedRoute, private dataService: DataService) { };
  
  userById!: User | undefined;
  users: User[] = users;

  ngOnInit(): void {
    const getUserId = this.route.snapshot.paramMap.get('userId');
    if (getUserId !== null && getUserId !== undefined) {
     
      this.userId = +getUserId;
    }
    this.userById = users.find(user => user.id === this.userId)

    if(this.userById){
      this.dataService.updateData(this.userById);
    }
   
    
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}

