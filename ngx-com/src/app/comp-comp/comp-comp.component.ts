import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { NgModel } from '@angular/forms';
import { ChildComponentComponent } from '../child-component/child-component.component';

interface Title {
  value: string;
  key: string;
}

@Component({
  selector: 'app-comp-comp',
  templateUrl: './comp-comp.component.html',
  styleUrls: ['./comp-comp.component.css']
})
export class CompCompComponent implements OnInit, AfterViewInit {

  // public filter: string = 'maison';
  @ViewChild('elem', { static: true }) element: ElementRef = <ElementRef>{};
  // @ViewChild(NgModel, { static: true }) myInput!: NgModel;

  @ViewChild(ChildComponentComponent, { static: true })
  childComponent!: ChildComponentComponent;

  @ViewChildren(ChildComponentComponent) childrens!: QueryList<ChildComponentComponent>;

  @ViewChildren('childComponentRef, childComponentRef2', {
    read: ElementRef
  })
  childrenRefs!: QueryList<ElementRef>;

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


  private _filter: string = 'maison';
  private _myInput!: NgModel;
  constructor() { }

  ngOnInit(): void {
    this.title.value = 'TEST NEW'
    this.isDisabled = true;

    const elem = document.getElementById('message');

    // elem!.innerHTML = 'hello';
    // console.log(elem);

    this.element.nativeElement.innerHTML = 'hello world';

  }

  ngAfterViewInit(): void {
    const childrenArray = this.childrens.toArray();
    console.log(this.childrenRefs);
  }

  @ViewChild(NgModel, { static: false })
  public set myInput(value: NgModel) {
    this._myInput = value;
    this.myInput.control.valueChanges.subscribe(console.log)
  }

  public get myInput(): NgModel {
    return this._myInput;
  }

  public receiveMessage(message: Partial<PointerEvent>): void {
    console.log(message.altKey);
  }

  public receiveChange(message: string): void {
    // console.log('input:: ', message);

    // this.filter = 'Mon message: ' + message;

    // console.warn('la valeur modifie:: ', this.filter);

  }

  public get filter(): string {
    return this._filter;
  }

  public set filter(value: string) {
    this._filter = value;

    // console.log('input:: ', this._filter);
  }

}
