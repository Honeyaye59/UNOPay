import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';
import { User } from '../models/userModel';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
  private dataSubject = new BehaviorSubject<User | null>(null);  // Use the appropriate type for your data
  public data$ = this.dataSubject.asObservable();

  updateData(data: User) {
    this.dataSubject.next(data);
  }
}
