import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TeamsService } from '../services/teams.service';
import { OrderPipe} from 'ngx-order-pipe';

@Component({
  selector: 'app-team-details',
  templateUrl: './team-details.component.html',
  styleUrls: ['./team-details.component.css']
})
export class TeamDetailsComponent implements OnInit {
  teamDetails: any;
  teamId: any;
  order: string ='roster.position';
  reverse: boolean = false;
  sortedTeams :any [];
  constructor(private route: ActivatedRoute, private teamsService: TeamsService,
              private orderPipe: OrderPipe) {
                // sorting using OrderPipe  
              this.sortedTeams = orderPipe.transform(this.teamDetails,'roster.position');
              console.log(this.sortedTeams);
              }
   setOrder(value: string){
     if(this.order === value){
      this.reverse = !this.reverse;
     }
     this.order = value;
   } 
    ngOnInit() {
    this.getTeams();
  }

  getTeams() {
    this.teamId = this.route.snapshot.params.id;
    this.teamsService.getTeams().subscribe(data => {
      let teams = data['teams'];
      teams.forEach(team => {
        console.log(team);
        if(team && team.id.toLowerCase() === this.teamId.toLowerCase()) {
          this.teamDetails = team.roster;
        }
      });
    })
  }

}
