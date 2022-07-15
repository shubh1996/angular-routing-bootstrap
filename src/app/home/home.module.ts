import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingRoutingModule } from './home-routing.module';
import { ShellComponent } from './shell/shell.component';
import { HeaderComponent } from './header/header.component';
import { LandingComponent } from './landing/landing.component';
import { LocComponent } from './loc/loc.component';

@NgModule({
  declarations: [
    ShellComponent,
    HeaderComponent,
    LandingComponent,
    LocComponent,
  ],
  imports: [CommonModule, HomeRoutingRoutingModule],
})
export class HomeModule {}
