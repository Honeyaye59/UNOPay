import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/services/theme.service';
import { ActivatedRoute } from '@angular/router';




@Component({
  selector: 'app-app-setting',
  templateUrl: './app-setting.component.html',
  styleUrls: ['./app-setting.component.css']
})
export class AppSettingComponent implements OnInit{
  userId! : number;
  constructor(public themeService: ThemeService, private route: ActivatedRoute) {}

  
  ngOnInit(): void {
    const getUserId = this.route.snapshot.paramMap.get('userId');
      if (getUserId !== null && getUserId !== undefined) {
       
        this.userId = +getUserId;
      }
  }

  toggleDarkMode(): void {
    const body = document.querySelector('body');
    body?.classList.add('dark-mode');
    // this.themeService.toggleDarkMode();
    
  }
  toggleLightMode(): void {
    const body = document.querySelector('body');
    body?.classList.remove('dark-mode');
    
  }

}
