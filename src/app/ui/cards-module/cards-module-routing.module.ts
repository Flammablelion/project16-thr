import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddFormComponent } from '../add-form/add-form.component';
import { CardComponent } from '../card/card.component';
import { CardsLayoutComponent } from '../cards-layout/cards-layout.component';
import { TypeListComponent } from '../type-list/type-list.component';
import { TypesComponent } from '../types/types.component';

const routes: Routes = [
  {
    path:"",
    component: CardsLayoutComponent,
    children :[
      {
        path:"", component: CardComponent
      },
      {
        path:"item",component: AddFormComponent
      },
      {
        path:"item/:id",component:AddFormComponent
      },
      {
        path:"types",component: TypeListComponent
      },
      {
        path:"types/list",component:TypesComponent
      },
      {
        path:"types/list/:id",component:TypesComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CardsModuleRoutingModule { }
