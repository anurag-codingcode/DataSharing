import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParentCardsComponent } from './parent-cards/parent-cards.component';

const routes: Routes = [
  {
    path:'',
    component:ParentCardsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
