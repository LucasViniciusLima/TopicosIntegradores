import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TemplateViewComponent } from './template-view/template-view.component';
import { HomeComponent } from './home/home.component';
import { RotasModule } from './rotas/rotas.module';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { ReviewComponent } from './review/review.component';
import { DbViewComponent } from './db-view/db-view.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateViewComponent,
    HomeComponent,
    CreateComponent,
    EditComponent,
    ReviewComponent,
    DbViewComponent
  ],
  imports: [
    BrowserModule,
    RotasModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
