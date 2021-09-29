import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './shared/aboutus/aboutus.component';

const routes: Routes = [
  {path: '', redirectTo: '/aboutus', pathMatch:'full'},
  {path:'aboutus', component: AboutusComponent},
  {path: '**', redirectTo: '/aboutus', pathMatch:'full'},

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations:[]
})
export class AppRoutingModule { }
