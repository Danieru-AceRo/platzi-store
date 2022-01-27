import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormProductComponent } from './components/form-product/form-product.component';
import { NavComponent } from './components/nav/nav.component';
import { ProductEditComponentComponent } from './components/product-edit-component/product-edit-component.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { ProductListComponent } from './components/product-list/product-list.component';

const routes: Routes = [
  {
    path:'',
    component: NavComponent,
    children: [
      {
        path:'create',
        component: ProductFormComponent
      },
      {
        path: 'product',
        component: ProductListComponent
      },
      {
        path: 'product/create',
        component: FormProductComponent
      },
      {
        path: 'product/edit/:id',
        component: ProductEditComponentComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
