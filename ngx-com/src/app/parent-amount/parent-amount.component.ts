import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-amount',
  templateUrl: './parent-amount.component.html',
  styleUrls: ['./parent-amount.component.css']
})
export class ParentAmountComponent implements OnInit {

  public amountTotal: number = 100;
  constructor() { }

  ngOnInit(): void {
  }

}
