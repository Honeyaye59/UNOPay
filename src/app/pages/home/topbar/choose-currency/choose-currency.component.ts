import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-choose-currency',
  templateUrl: './choose-currency.component.html',
  styleUrls: ['./choose-currency.component.css']
})
export class ChooseCurrencyComponent {
  @Output() currencySelected = new EventEmitter<string>();
  chooseCurrency(event: any): void {
    const selectedCurrency = event.target.value;
    this.currencySelected.emit(selectedCurrency);
  }
}
