import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './shared/aboutus/aboutus.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from "./shared/footer/footer.component";
import { SettingsComponent } from './settings/settings.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {path: '', redirectTo: '/aboutus', pathMatch:'full'},
  {path:'aboutus', component: AboutusComponent},
  {path:'settings', component: SettingsComponent},
  // {path:'footer', component: FooterComponent},

  {path: '**', redirectTo: '/aboutus', pathMatch:'full'},

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations:[
  ]
})
export class AppRoutingModule { }
