import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { CreateComponent } from '../create/create.component';
import { DbViewComponent } from '../db-view/db-view.component';
import { EditComponent } from '../edit/edit.component';
import { ReviewComponent } from '../review/review.component';

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'create', component: CreateComponent},
    {path: 'db', component: DbViewComponent},
    {path: 'edit-topic', component: EditComponent},
    {path: 'review', component: ReviewComponent}
]

@NgModule({
    exports: [RouterModule],
    imports:[RouterModule.forRoot(routes)],
})
export class RotasModule {}