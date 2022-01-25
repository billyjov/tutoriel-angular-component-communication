import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child-amount',
  templateUrl: './child-amount.component.html',
  styleUrls: ['./child-amount.component.css']
})
export class ChildAmountComponent implements OnInit {

  @Input()
  public amount: number = 0;
  constructor() { }

  ngOnInit(): void {
  }

}
