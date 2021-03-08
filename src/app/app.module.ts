import { HomeComponent } from './components/home/home.component';
import { PersonEditComponent } from './components/person/person-edit/person-edit.component';
import { PersonCreateComponent } from './components/person/person-create/person-create.component';
// import { PersonIndexComponent } from './components/person/person-index/person-index.component';
import { MenuComponent } from './components/menu/menu.component';
import { HeaderComponent } from './components/header/header.component';
import { ProductComponent } from './components/product/product.component';
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

@NgModule({
  declarations: [
    AppComponent,
    PersonComponent,
    ProductComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    // PersonIndexComponent,
    PersonCreateComponent,
    PersonEditComponent,
    HomeComponent,
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
