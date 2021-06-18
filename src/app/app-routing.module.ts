import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ContactsComponent } from './shared/contacts/contacts.component';
import { InformationComponent } from './shared/information/information.component';
import { AddFormComponent } from './ui/add-form/add-form.component';


const routes: Routes = [
  {
    path: '',
    component: InformationComponent,
  },
  {
    path: 'cards',
    loadChildren: () =>
      import('./ui/cards-module/cards-module.module').then((mod) => mod.CardsModuleModule),
  },
  {
    path: 'contacts',
    component: ContactsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}