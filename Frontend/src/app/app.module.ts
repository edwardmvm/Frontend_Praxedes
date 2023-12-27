import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OperationComponent } from './operation/operation.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { BrowserModule } from '@angular/platform-browser';
import { MatInputModule } from '@angular/material/input';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { AuthComponent } from './auth/auth.component';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { RegistrarModule } from './modules/registrar/registrar.module';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    OperationComponent
  ],
  imports: [
    // RegistrarModule,
    FormsModule,
    BrowserModule,
    MatIconModule,
    MatCardModule,
    MatListModule,
    MatInputModule,
    MatButtonModule,
    HttpClientModule,
    MatToolbarModule,
    AppRoutingModule,
    MatPaginatorModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
