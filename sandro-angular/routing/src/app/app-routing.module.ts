import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { AboutComponent } from './about/about.component';


export const routes: Routes = [
  {
    path:'',
    redirectTo:'Home',
    pathMatch:'full'
  },
  {
    path:'Home',
    component:HomeComponent
  },
  {
    path:'Blog',
    component:BlogComponent
  },
  {
    path:'About',
    component:AboutComponent
  },
  {
    path:'products',
    component:AboutComponent
  },
  {
    path:'products',
    loadChildren: () => import(`./products/products.module`).then(
      module => module.ProductsModule
    )
  },
  {
    path:'**',
    redirectTo:'Home',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
