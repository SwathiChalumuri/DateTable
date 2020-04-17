import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './components/table/table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule, MatInputModule,MatSelectModule, MatFormFieldModule} from '@angular/material';
import { ExampleComponent } from './components/example/example.component';
import { Table2Component } from './components/table2/table2.component';


@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    ExampleComponent,
    Table2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatInputModule,MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
