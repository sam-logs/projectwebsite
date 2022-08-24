import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { SidenavComponent } from './sidenav/sidenav.component';

const routes: Routes = [
  {
    path:'youtube', component: SidenavComponent,
  },
  {
    path:'youtube/exp', component: NavComponent,
  },
  {
    path:'youtube/home', component: AppComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
