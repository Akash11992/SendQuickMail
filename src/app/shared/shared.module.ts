import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';

import { DashboardNavComponent } from './components/dashboard-nav/dashboard-nav.component';
import { DashboardHeaderComponent } from './components/dashboard-header/dashboard-header.component';

@NgModule({
  declarations: [
    DashboardHeaderComponent,
    DashboardNavComponent,
    
  ],
  imports: [
    CommonModule,
    // MaterialModule,
    RouterModule,
    MatCardModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule
  ],
  exports: [
    DashboardHeaderComponent,
    DashboardNavComponent,
    
  ]
})
export class SharedModule { }
