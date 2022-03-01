import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ParentAccountService {

  public amount$: BehaviorSubject<number | null> = new BehaviorSubject<number | null>(100);

  constructor() { }

  public getAmount(): Observable<number | null> {
    return this.amount$.asObservable();
  }

  public setAmount(): void {
    this.amount$.next(this.amount$.value! + 100);
  }

  public retrieve(): void {
    this.amount$.next(this.amount$.value! - 100);
  }
}
