import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterCardListComponent } from './components/character-card-list/character-card-list.component';
import { CharacterDetailsComponent } from './components/character-details/character-details.component';
const routes = [
  { path: `characterList`, component: CharacterCardListComponent },
  { path: `characterDetails/:id`, component: CharacterDetailsComponent },
  { path: '', redirectTo: '/characterList', pathMatch: 'full' },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
