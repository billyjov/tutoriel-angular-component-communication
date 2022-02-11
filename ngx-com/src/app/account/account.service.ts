import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  public amount: number = 100;
  constructor() { }
}
