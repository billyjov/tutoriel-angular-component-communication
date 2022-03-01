import { Component, OnInit, Input, Output, OnChanges, SimpleChanges, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-child-amount',
  templateUrl: './child-amount.component.html',
  styleUrls: ['./child-amount.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildAmountComponent implements OnInit, OnChanges {

  @Input()
  public amount: number | null = 0;
  @Output()
  public amountChange: EventEmitter<number | null> = new EventEmitter<number | null>();

  @Input()
  public isIncreased: boolean = false;

  @Input()
  public childName!: string;

  @Input()
  public favoriteColor!: string;

  constructor() { }

  ngOnInit(): void {
    // console.log('montant: ', this.amount);
  }

  ngOnChanges(changes: SimpleChanges): void {
    // console.log(changes);
    if (changes['amount'] && changes['amount'].currentValue) {
      this.sendNotification();
    }
  }

  public withdraw(): void {
    this.amount! -= 100;
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
    // console.log('nouveau montant: ', this.amount);
  }

  public get checkPerformance() {
    console.log('View checked: ', this.childName);
    return true;
  }

}
