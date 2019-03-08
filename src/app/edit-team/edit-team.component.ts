import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TeamsService } from '../services/teams.service';

@Component({
  selector: 'app-edit-team',
  templateUrl: './edit-team.component.html',
  styleUrls: ['./edit-team.component.css']
})
export class EditTeamComponent implements OnInit {

  memberDetails: any;
  teamId: any;

  constructor(private route: ActivatedRoute, 
              private router: Router, 
              private teamsService: TeamsService) { }

  ngOnInit() {
    this.getTeams();
  }

  getTeams() {
    this.teamId = this.route.snapshot.params.id;
    let getIndex = this.route.snapshot.params.index;
    this.teamsService.getTeams().subscribe(data => {
      let teams = data['teams'];
      teams.forEach(team => {
        if(team && team.id.toLowerCase() === this.teamId.toLowerCase()) {
          this.memberDetails = team.roster[getIndex];
          console.log(this.memberDetails);
        }
      });
    })
  }

  onSubmit(form) {
    if(form.invalid){
      console.log(form.value);
      // storing Form values in local memory
      sessionStorage.setItem('teamMember',JSON.stringify(form.value));
        
    }
    else{
      // storing updated form values in local memory
      sessionStorage.setItem('teamMember',JSON.stringify(form.value));
      this.router.navigate(['']);
    }
  }

  cancel(form) {
    this.router.navigate(['teamDetails/'+this.teamId]);
  }

}
