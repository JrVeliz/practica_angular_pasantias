import { Routes } from '@angular/router';
import { PersonaAddComponent } from './personas/persona-add/persona-add.component';
import { PersonaListComponent } from './personas/persona-list/persona-list.component';

export const routes: Routes = [
    {path:"persona-add",component:PersonaAddComponent},
    {path:"persona-list",component:PersonaListComponent}
];
