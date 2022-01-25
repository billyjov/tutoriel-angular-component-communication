import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CompCompComponent } from './comp-comp/comp-comp.component';
import { ChildComponentComponent } from './child-component/child-component.component';
import { ParentAmountComponent } from './parent-amount/parent-amount.component';
import { ChildAmountComponent } from './child-amount/child-amount.component';

@NgModule({
  declarations: [
    AppComponent,
    CompCompComponent,
    ChildComponentComponent,
    ParentAmountComponent,
    ChildAmountComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
