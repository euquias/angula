import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { ProductCrudComponent } from './views/product-crud/product-crud.component';
import { QuemSomosComponent } from './views/quem-somos/quem-somos.component';
import { ComoFucionaComponent } from './views/como-fuciona/como-fuciona.component';
import { BlogComponent } from './views/blog/blog.component';

const routes: Routes = [
  {path: "", component: HomeComponent },
  {path: 'comofunciona', component: ComoFucionaComponent},
  {path: 'products', component: ProductCrudComponent},
  {path: 'blog', component: BlogComponent},
  {path: 'quem', component: QuemSomosComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
