import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from '../../app/pages/transfer-to/popup/popup.component';

@Injectable({
  providedIn: 'root'
})
export class PopupService {

  constructor(private dialog: MatDialog) { }
  openPopup(receiver: any, amount: any): void {
    this.dialog.open(PopupComponent, {
      width: '400px', // Adjust the width as needed
      // Other MatDialog configurations
    });
  }
}
