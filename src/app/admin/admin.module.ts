import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { NavComponent } from './components/nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { ProductListComponent } from './components/product-list/product-list.component';
import { MaterialModule } from '../material/material.module';
import {MatTableModule} from '@angular/material/table';
import { CoreModule } from '../core/core.module';
import { FormProductComponent } from './components/form-product/form-product.component';
import { ProductEditComponentComponent } from './components/product-edit-component/product-edit-component.component';


@NgModule({
  declarations: [ProductFormComponent, NavComponent, ProductListComponent, FormProductComponent, ProductEditComponentComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MaterialModule,
    MatTableModule,
    CoreModule
  ]
})
export class AdminModule { }
