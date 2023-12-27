import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './registrar-routing.module';
// import { RegistrarComponent } from './registrar.component';

import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    // RegistrarComponent
  ],
  exports: [
    // RegistrarComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
  ]
})
export class RegistrarModule { }
