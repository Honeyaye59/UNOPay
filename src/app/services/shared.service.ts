
import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  walletButtonClick = new EventEmitter<void>();
  currencySelected = new EventEmitter<string>();

  emitWalletButtonClick(): void {
    this.walletButtonClick.emit();
  }
  emitCurrencySelected(currency: string): void {
    this.currencySelected.emit(currency);
  }
}
