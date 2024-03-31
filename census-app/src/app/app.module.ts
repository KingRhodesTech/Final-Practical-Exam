import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CensusListComponent } from './census-list/census-list.component';
import { AddCensusComponent } from './add-census/add-census.component';
import { UpdateCensusComponent } from './update-census/update-census.component';

@NgModule({
  declarations: [
    AppComponent,
    CensusListComponent,
    AddCensusComponent,
    UpdateCensusComponent,
  ],
  imports: [BrowserModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
