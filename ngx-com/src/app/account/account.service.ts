import { Injectable, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { ParentAccountService } from '../parent-account/parent-account.service';

@Injectable()
export class AccountService implements OnDestroy {

  public amount: number = 100;
  constructor(private parentAccountService: ParentAccountService) { }


  ngOnDestroy(): void {
    console.log('Mon service detruit');
  }

  public getAmount(): Observable<number|null> {
    return this.parentAccountService.getAmount();
  }

  public retrieve(): void {
    this.parentAccountService.retrieve();
  }

  public setAmount(): void {
    this.parentAccountService.setAmount();
  }

}
