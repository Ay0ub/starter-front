import { ProductEditComponent } from './components/product/product-edit/product-edit.component';
import { ProductIndexComponent } from './components/product/product-index/product-index.component';
import { HomeComponent } from './components/home/home.component';
import { PersonEditComponent } from './components/person/person-edit/person-edit.component';
import { PersonCreateComponent } from './components/person/person-create/person-create.component';
import { PersonIndexComponent } from './components/person/person-index/person-index.component';
import { MenuComponent } from './components/menu/menu.component';
import { HeaderComponent } from './components/header/header.component';
import { PersonComponent } from './components/person/person.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './components/footer/footer.component';
import { ProductDeleteComponent } from './components/product/product-delete/product-delete.component';
import { ProductCreateComponent } from './components/product/product-create/product-create.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    PersonIndexComponent,
    PersonCreateComponent,
    PersonEditComponent,
    HomeComponent,
    ProductDeleteComponent,
    ProductIndexComponent,
    ProductCreateComponent,
    ProductEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
