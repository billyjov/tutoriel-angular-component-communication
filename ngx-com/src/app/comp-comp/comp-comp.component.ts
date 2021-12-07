import { Component, OnInit } from '@angular/core';

interface Title {
  value: string;
  key: string;
}

@Component({
  selector: 'app-comp-comp',
  templateUrl: './comp-comp.component.html',
  styleUrls: ['./comp-comp.component.css']
})
export class CompCompComponent implements OnInit {

  public readonly title: Title = {
    value: 'test',
    key: 'key'
  };

  public isDisabled: boolean = false;
  public color: string = 'green';
  constructor() { }

  ngOnInit(): void {
    this.title.value = 'TEST NEW'
    this.isDisabled = true;

  }

}
