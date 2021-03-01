import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PersonComponent } from './person/person.component';
import { ProductComponent } from './product/product.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { CreateComponent } from './person/create/create.component';
import { UpdateComponent } from './person/update/update.component';
import { IndexComponent } from './person/index/index.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonComponent,
    ProductComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    CreateComponent,
    UpdateComponent,
    IndexComponent
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
