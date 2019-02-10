import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './sidenav/sidenav.component';
import { LayoutModule } from '@angular/cdk/layout';
import {
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatExpansionModule,
} from '@angular/material';
import { RouterModule } from '@angular/router';
import { ProductFiltersComponent } from './product-filters/product-filters.component';

@NgModule({
  declarations: [SidenavComponent, ProductFiltersComponent],
  imports: [
    CommonModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatExpansionModule,
    RouterModule.forChild([{ path: 'products', component: SidenavComponent }])
  ]
})
export class ProductsPageModule {}
