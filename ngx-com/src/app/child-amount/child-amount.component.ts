import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child-amount',
  templateUrl: './child-amount.component.html',
  styleUrls: ['./child-amount.component.css']
})
export class ChildAmountComponent implements OnInit, OnChanges {

  @Input()
  public amount: number = 0;
  @Input()
  public isIncreased: boolean = false;

  constructor() { }

  ngOnInit(): void {
    console.log('montant: ', this.amount);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    if (changes['amount'] && changes['amount'].currentValue) {
      this.sendNotification();
    }
  }

  // get amount(): number {
  //   return this._amount;
  // }

  // @Input()
  // set amount(value: number) {
  //   this._amount = value;
  //   this.sendNotification();
  // }

  public sendNotification(): void {
    console.log('nouveau montant: ', this.amount);
  }

}
