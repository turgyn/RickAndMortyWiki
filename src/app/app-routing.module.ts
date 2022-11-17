import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CharacterDetailComponent} from "./character-detail/character-detail.component";
import {CharactersComponent} from "./characters/characters.component";

const routes: Routes = [
  { path: '', component: CharactersComponent},
  { path: 'detail/:id', component: CharacterDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
