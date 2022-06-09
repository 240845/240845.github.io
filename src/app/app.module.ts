import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './sharepage/navbar/navbar.component';
import { FooterComponent } from './sharepage/footer/footer.component';
import { GlownaComponent } from './podstrony/glowna/glowna.component';
import { KontaktComponent } from './podstrony/kontakt/kontakt.component';
import { TerminComponent } from './podstrony/termin/termin.component';
import { ZapComponent } from './podstrony/zap/zap.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    GlownaComponent,
    KontaktComponent,
    TerminComponent,
    ZapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
