import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CompCompComponent } from './comp-comp/comp-comp.component';
import { ChildComponentComponent } from './child-component/child-component.component';
import { ParentAmountComponent } from './parent-amount/parent-amount.component';
import { ChildAmountComponent } from './child-amount/child-amount.component';
import { HouseComponent } from './house/house.component';
import { DetailsComponent } from './details/details.component';
import { AppRoutingModule } from './app-routing/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    CompCompComponent,
    ChildComponentComponent,
    ParentAmountComponent,
    ChildAmountComponent,
    HouseComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
