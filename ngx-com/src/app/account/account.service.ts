import { Injectable, OnDestroy } from '@angular/core';

@Injectable()
export class AccountService implements OnDestroy {

  public amount: number = 100;
  constructor() { }


  ngOnDestroy(): void {
    console.log('Mon service detruit');
  }
}
