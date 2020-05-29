import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { FormCreateLineComponent } from './formCreateLine/formCreateLine.component';
import { VistaComponent } from './vista/vista.component';
import { FormEditLineComponent } from './formEditLine/formEditLine.component';

const appRoutes: Routes = [
   { path: '', component: HomeComponent, data: { title: 'From HOME'} },
   { path: 'register', component: FormCreateLineComponent, data: {title: 'From REGISTER'} },
   { path: 'vista', component: VistaComponent , data: {title: 'From VISTA'} },
   { path: 'editar', component:FormEditLineComponent, data: {title: 'From TITLE'} }
];

@NgModule({
   declarations: [
      AppComponent,
      HomeComponent,
      NavComponent,
      FormCreateLineComponent,
      VistaComponent,
      FormEditLineComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      FormsModule,
      RouterModule.forRoot(appRoutes)
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
