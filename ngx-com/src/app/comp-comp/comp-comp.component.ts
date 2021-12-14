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

  public filter: string = 'maison';
  public readonly title: Title = {
    value: 'test',
    key: 'key'
  };

  public isDisabled: boolean = false;
  public color: string = 'green';
  public items = [

    {
      id: 0,
      name: 'Test 1',
      key: 'mykey'
    }, {
      id: 1,
      name: 'Test 2',
      key: null
    },
  ];
  constructor() { }

  ngOnInit(): void {
    this.title.value = 'TEST NEW'
    this.isDisabled = true;

    console.log('premiere valeur: ', this.filter);
  }

  public receiveMessage(message: Partial<PointerEvent>): void {
    console.log(message.altKey);
  }

  public receiveChange(message: string): void {
    console.log('input:: ', message);

    // this.filter = 'Mon message: ' + message;

    // console.warn('la valeur modifie:: ', this.filter);

  }

}
