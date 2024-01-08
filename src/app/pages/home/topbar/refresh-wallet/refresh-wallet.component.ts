import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-refresh-wallet',
  templateUrl: './refresh-wallet.component.html',
  styleUrls: ['./refresh-wallet.component.css']
})
export class RefreshWalletComponent {
  @Output() walletButtonClick = new EventEmitter<void>();
  refreshWallet(): void {
    this.walletButtonClick.emit();
    console.log("Button clicked"); 

    // Add your custom logic here
  }
}
