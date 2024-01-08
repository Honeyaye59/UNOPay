import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-account-setting',
  templateUrl: './account-setting.component.html',
  styleUrls: ['./account-setting.component.css']
})
export class AccountSettingComponent implements OnInit{
  userId!: number;
constructor(private route: ActivatedRoute) { };

ngOnInit(): void {
  const getUserId = this.route.snapshot.paramMap.get('userId');
    if (getUserId !== null && getUserId !== undefined) {
     
      this.userId = +getUserId;
    }
}


}
