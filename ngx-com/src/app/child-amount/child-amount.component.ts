import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child-amount',
  templateUrl: './child-amount.component.html',
  styleUrls: ['./child-amount.component.css']
})
export class ChildAmountComponent implements OnInit {

  private _amount: number = 0;
  constructor() { }

  ngOnInit(): void {
    console.log('montant: ', this.amount);
  }

  get amount(): number {
    return this._amount;
  }

  @Input()
  set amount(value: number) {
    this._amount = value;
    this.sendNotification();
  }

  public sendNotification(): void {
    console.log('nouveau montant: ', this.amount);
  }

}
