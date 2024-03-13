import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CategoryComponent} from "./components/category/category.component";
import {CategoryDetailsComponent} from "./components/category-details/category-details.component";
import {SharedModule} from "../shared/shared.module";
import {AssetViewComponent} from "./components/asset-view/asset-view.component";

const routes: Routes = [
  { path:'assets',
    component: CategoryComponent,
  },
  {
    path:'assets/:id',
    component: CategoryDetailsComponent
  },
  { path: 'asset-view', component: AssetViewComponent},
  { path: '', redirectTo: 'categories', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
