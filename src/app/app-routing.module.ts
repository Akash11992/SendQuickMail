import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductCreateComponent } from './components/product-create/product-create.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { NoPageComponent } from './no-page/no-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'products', pathMatch: 'full' },
{ path: 'products', component: ProductListComponent },
{ path: 'products/:id', component: ProductDetailsComponent },
{ path: 'create', component: ProductCreateComponent },
{ path: '**', component: NoPageComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
