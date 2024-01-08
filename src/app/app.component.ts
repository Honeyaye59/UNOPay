import { Component } from '@angular/core';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'UNOPay';
  constructor(private themeService: ThemeService) {
    this.themeService.isDarkMode$.subscribe((isDarkMode) => {
      document.body.classList.toggle('dark-mode', isDarkMode);
    });
  }
}
