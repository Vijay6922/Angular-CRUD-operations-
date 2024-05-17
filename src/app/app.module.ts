import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { TestServiceService } from './test-service.service';
import { ChildComponent1Component } from './child-component1/child-component1.component';
import { ChildComponent2Component } from './child-component2/child-component2.component';
import { ChildComponent3Component } from './child-component3/child-component3.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { AddusersComponent } from './addusers/addusers.component';
import { UserslistComponent } from './userslist/userslist.component';
import { FormsModule } from '@angular/forms';
import { Router } from 'express';
import { UpdateuserComponent } from './updateuser/updateuser.component';


const routes:Routes=[
  {
    path:'',component:HomeComponent
  },
  {
    path:'home',component:HomeComponent,
    children:[
      {
        path:'child-Component1',component:ChildComponent1Component
      },
      {
        path:'child-Component2',component:ChildComponent2Component
      },
      {
        path:'child-Component3',component:ChildComponent3Component
      }
    ]
  },{
    path:'about',component:AboutComponent
  },
  {
    path:'contact',component:ContactComponent
  },
  {
    path:'login',component:LoginComponent
  },
  {
    path:'userslist',component:UserslistComponent
  },
  {
    path:'addusers',component:AddusersComponent
  },
  {
    path:'updateuser/:id',component:UpdateuserComponent
  }
  ]

  
  
@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    ContactComponent,
    HeaderComponent,
    ChildComponent1Component,
    ChildComponent2Component,
    ChildComponent3Component,
    LoginComponent,
    AddusersComponent,
    UserslistComponent,
    UpdateuserComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule,

  ],
  providers: [
    provideClientHydration(),
    TestServiceService,
 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
