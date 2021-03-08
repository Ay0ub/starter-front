import { HomeComponent } from './components/home/home.component';
import { ProductComponent } from './components/product/product.component';
import { PersonComponent } from './components/person/person.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'person', component: PersonComponent },
  {path: 'product', component: ProductComponent },
  {path: 'home', component: HomeComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
