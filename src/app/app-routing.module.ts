import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpUserComponent } from './sign-up-user/sign-up-user.component';




const routes: Routes = [
  { path: '', loadChildren: () => import('./modules/core/core.module').then(m => m.CoreModule) },
  { path: '', redirectTo: 'categories', pathMatch: 'full' },
  { path: '', redirectTo: 'asset-view', pathMatch: 'full' },

  { path: '', redirectTo: 'sign-up-user', pathMatch: 'full' },
  { path: 'sign-up-user', component: SignUpUserComponent },

  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
