import { Component, OnInit, Input, Output, OnChanges, SimpleChanges, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-amount',
  templateUrl: './child-amount.component.html',
  styleUrls: ['./child-amount.component.css']
})
export class ChildAmountComponent implements OnInit, OnChanges {

  @Input()
  public amount: number = 0;
  @Output()
  public amountChange: EventEmitter<number> = new EventEmitter<number>();

  @Input()
  public isIncreased: boolean = false;

  @Input()
  public childName!: string;

  @Input()
  public favoriteColor!: string;

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

  public withdraw(): void {
    this.amount -= 100;
    this.amountChange.emit(this.amount);
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
