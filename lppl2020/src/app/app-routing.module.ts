import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './Components/homepage/homepage.component';
import { GamerulesComponent } from './Components/gamerules/gamerules.component';
const routes: Routes = [
  {
    path:"lppl2020", component:HomepageComponent,
  },
  {path:"", redirectTo:"/lppl2020", pathMatch:"full"},
  {
    path:"gamerules", component:GamerulesComponent,
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
