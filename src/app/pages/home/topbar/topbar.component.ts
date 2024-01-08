import { Component, EventEmitter, Output } from '@angular/core';
import { SharedService } from '../../../services/shared.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent {
  constructor(private sharedService: SharedService) {}
  onWalletButtonClick(): void {
    this.sharedService.emitWalletButtonClick();
  }
  onCurrencySelected(currency: string): void {
    this.sharedService.emitCurrencySelected(currency);
  }
}

