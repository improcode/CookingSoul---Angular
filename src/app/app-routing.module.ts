import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { RecipeListComponent } from "./recipe/recipe-list/recipe-list.component";
import { RecipeDetailComponent } from "./recipe/recipe-detail/recipe-detail.component";
import { RecipeComponent } from "./recipe/recipe.component";
import { RecipeStartComponent } from "./recipe/recipe-start/recipe-start.component";
import { RecipeEditComponent } from "./recipe/recipe-edit/recipe-edit.component";

const appRoutes: Routes = [
    {path: '', redirectTo: 'recipes', pathMatch: 'full'},
    {path: 'shopping-list', component: ShoppingListComponent},
    {path: 'recipes', component: RecipeComponent, children: [
      {path: '', component: RecipeStartComponent},
      // {path: ':recipeName', component: RecipeDetailComponent},
      {path: 'new', component: RecipeEditComponent},
      {path: ':id', component: RecipeDetailComponent},
      {path: ':id/edit', component: RecipeEditComponent}
    ]}
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(appRoutes, {useHash: true})],
    exports: [RouterModule]
  })
  export class AppRoutingModule {}