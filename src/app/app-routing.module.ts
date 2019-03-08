import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeamsComponent } from './teams/teams.component'
import { TeamDetailsComponent } from './team-details/team-details.component';
import { EditTeamComponent } from './edit-team/edit-team.component';

const routes: Routes = [
  { path: '', component: TeamsComponent },
  { path: 'teamDetails/:id', component: TeamDetailsComponent },
  { path: 'editTeam/:id/:index', component: EditTeamComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}
