import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account/account.service';

@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.css'],
  providers: [AccountService],
})
export class HouseComponent implements OnInit {

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
  }

  public get amount(): number {
    return this.accountService.amount;
  }

  public set amount(value: number) {
    this.accountService.amount = value;
  }

}
