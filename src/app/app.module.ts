import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { MaterialModule } from './shared/material.module';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: 'contactmanager', loadChildren: () => import('./contactmanager/contactmanager.module').then(m => m.ContactmanagerModule)},
  { path: 'demo', loadChildren: () => import('./demo/demo.module').then(m => m.DemoModule)},
  { path: '**', redirectTo: 'contactmanager' }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),    
    FormsModule,
    HttpClientModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
