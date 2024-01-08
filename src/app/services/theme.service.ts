import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  // public isDarkMode: boolean = false;
  constructor() { }

  private isDarkModeSubject = new BehaviorSubject<boolean>(false);
  public isDarkMode$: Observable<boolean> = this.isDarkModeSubject.asObservable();

  toggleDarkMode(): void {
    // this.isDarkMode = !this.isDarkMode;
    this.isDarkModeSubject.next(!this.isDarkModeSubject.value);
  }
}
