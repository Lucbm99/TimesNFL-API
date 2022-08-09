import { NflService } from './nfl.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nfl-times',
  templateUrl: './nfl-times.component.html',
  styleUrls: ['./nfl-times.component.scss']
})
export class NflTimesComponent implements OnInit {
  public listTeams: any;
  public a; 

  constructor(
    private _nflService: NflService,
  ) { }

  ngOnInit(): void {

    this._nflService.getTeamsNFL().subscribe((response) => {
      let leaguesList = response.sports.map(item => item.leagues);
      console.log(leaguesList);
      let teamsList = leaguesList.reduce(item => item.teams)
      console.log(teamsList)
      let teamsList2 = teamsList.map(item => item.teams);
      console.log(teamsList2);

      let teamsList3 = teamsList2.reduce(item => item.team)
      let teamsList4 = teamsList3.map(item => item)
      console.log(teamsList4);

      let logos = teamsList4.map(logo => logo.team.logos)
      console.log(logos);
      this.a = logos;
      this.listTeams = teamsList4;

    })

  }

}
