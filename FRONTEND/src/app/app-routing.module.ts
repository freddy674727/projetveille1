import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404Component } from './components/error404/error404.component';
import { HomepageComponent } from './components/homepage/homepage.component';

const routes: Routes = [
  {path:'', component:HomepageComponent, pathMatch:'full'},
  {path:'homepage', component:HomepageComponent},
  {path: '**', component:Error404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
