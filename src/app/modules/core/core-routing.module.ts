import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CategoryComponent} from "./components/category/category.component";
import {CategoryDetailsComponent} from "./components/category-details/category-details.component";
import {SharedModule} from "../shared/shared.module";

const routes: Routes = [
  { path:'categories',
    component: CategoryComponent,
  },
  {
    path:'categories/:id',
    component: CategoryDetailsComponent
  },
  { path: '', redirectTo: 'categories', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
