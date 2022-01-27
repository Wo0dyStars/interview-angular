import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material/material.module';
import { UxExampleComponent } from './components/ux-example/ux-example.component';
import { FizzbuzzComponent } from './components/fizzbuzz/fizzbuzz.component';
import { HomeComponent } from './components/home/home.component';
import { PhoneNumberComponent } from './shared/phone-number/phone-number.component';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';

@NgModule({
  declarations: [
    AppComponent,
    UxExampleComponent,
    FizzbuzzComponent,
    HomeComponent,
    PhoneNumberComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    NgxIntlTelInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
