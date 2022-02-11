import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account/account.service';

@Component({
  selector: 'app-parent-amount',
  templateUrl: './parent-amount.component.html',
  styleUrls: ['./parent-amount.component.css']
})
export class ParentAmountComponent implements OnInit {

  public amountTotal: number = 100;
  public isIncreased: boolean = false;
  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
  }

  public deposit(): void {
    // this.amountTotal += 100;
    // this.isIncreased = true;
    this.amount += 100;
  }

  public get amount(): number {
    return this.accountService.amount;
  }

  public set amount(value: number) {
    this.accountService.amount = value;
  }

}
