import { NflService } from './nfl.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nfl-times',
  templateUrl: './nfl-times.component.html',
  styleUrls: ['./nfl-times.component.scss']
})
export class NflTimesComponent implements OnInit {
  public listTeams: any;
  public league; 
  showLoaderTeams : boolean = true;

  constructor(
    private _nflService: NflService,
  ) { }

  ngOnInit(): void {

    this._nflService.getTeamsNFL().subscribe((response) => {
      if (response) {
        this.showLoaderTeams = false;
      }
      let leaguesList = response.sports.map(item => item.leagues);
      let reduceTeamsList = leaguesList.reduce(item => item.teams);
      
      this.league = reduceTeamsList.map(item => item.name);

      let newTeamsList = reduceTeamsList.map(item => item.teams);

      let reduceNewTeamsList = newTeamsList.reduce(item => item.team)
      let teamsListActualized = reduceNewTeamsList.map(item => item)
      this.listTeams = teamsListActualized;
    })

  }

}
