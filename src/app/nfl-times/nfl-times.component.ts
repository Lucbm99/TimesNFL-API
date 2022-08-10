import { NflService } from './nfl.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nfl-times',
  templateUrl: './nfl-times.component.html',
  styleUrls: ['./nfl-times.component.scss']
})
export class NflTimesComponent implements OnInit {
  public listTeams: any;
  public images;
  public images2;

  constructor(
    private _nflService: NflService,
  ) { }

  ngOnInit(): void {

    this._nflService.getTeamsNFL().subscribe((response) => {
      let leaguesList = response.sports.map(item => item.leagues);
      let reduceTeamsList = leaguesList.reduce(item => item.teams)
      let newTeamsList = reduceTeamsList.map(item => item.teams);

      let reduceNewTeamsList = newTeamsList.reduce(item => item.team)
      let teamsListActualized = reduceNewTeamsList.map(item => item)

      let logos = teamsListActualized.map(logo => logo.team.logos[0])
      this.images = logos;
      console.log(this.images);
      
      this.listTeams = teamsListActualized;
      console.log(this.listTeams)
    })

  }

}
