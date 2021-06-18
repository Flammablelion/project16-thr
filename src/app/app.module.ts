import { NgModule } from '@angular/core';
import { FormBuilder, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AddFormComponent } from './ui/add-form/add-form.component';
import { CardComponent } from './ui/card/card.component';
import { HeaderComponent } from './shared/header/header.component';
import { CardsLayoutComponent } from './ui/cards-layout/cards-layout.component';
import { AppRoutingModule } from './app-routing.module';
import { InformationComponent } from './shared/information/information.component';
import { ContactsComponent } from './shared/contacts/contacts.component';
import { TypesComponent } from './ui/types/types.component';
import { TypeListComponent } from './ui/type-list/type-list.component';


@NgModule({
  declarations: [
    AppComponent,
    AddFormComponent,
    CardComponent,
    HeaderComponent,
    CardsLayoutComponent,
    HeaderComponent,
    InformationComponent,
    ContactsComponent,
    TypesComponent,
    TypeListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
