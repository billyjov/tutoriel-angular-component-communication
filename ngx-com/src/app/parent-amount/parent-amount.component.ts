import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-amount',
  templateUrl: './parent-amount.component.html',
  styleUrls: ['./parent-amount.component.css']
})
export class ParentAmountComponent implements OnInit {

  public amountTotal: number = 100;
  public isIncreased: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  public deposit(): void {
    this.amountTotal += 100;
    this.isIncreased = true;
  }

}
