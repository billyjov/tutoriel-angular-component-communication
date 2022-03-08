import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { ParentAmountComponent } from '../parent-amount/parent-amount.component';
import { DetailsComponent } from '../details/details.component';

const routes: Route[] = [
  {
    path: '',
    component: ParentAmountComponent
  }, {
    path: 'details',
    component: DetailsComponent,
    data: {
      role: 'ADMIN',
      adminNames: ['Anna', 'Joe'],
      user: {
        name: 'Test',
        age: 12
      }
    }
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
