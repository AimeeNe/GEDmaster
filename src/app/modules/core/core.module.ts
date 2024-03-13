import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { CategoryComponent } from './components/category/category.component';
import { CategoryDetailsComponent } from './components/category-details/category-details.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import {SharedModule} from "../shared/shared.module";
import { AssetViewComponent } from './components/asset-view/asset-view.component';


@NgModule({
    declarations: [
        CategoryComponent,
        CategoryDetailsComponent,
        NavigationComponent,
        AssetViewComponent,
    ],
    exports: [
        NavigationComponent
    ],
    imports: [
        CoreRoutingModule,
      SharedModule
    ]
})
export class CoreModule { }
