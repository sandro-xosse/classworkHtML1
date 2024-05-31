import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { MobileComponent } from './mobile/mobile.component';
import { TvComponent } from './tv/tv.component';
import { AppRoutingModule,} from '../app-routing.module';
import { Routes } from '@angular/router';
import { RouterModule,  } from '@angular/router';


const routes:Routes=[
  {    
      path:'mobile',
      component:MobileComponent  
  },
  {    
    path:'tv',
    component:TvComponent
}
]


@NgModule({
  declarations: [
    ProductsComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ]
})
export class ProductsModule { }



