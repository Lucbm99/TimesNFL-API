import { NflService } from './nfl.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nfl-times',
  templateUrl: './nfl-times.component.html',
  styleUrls: ['./nfl-times.component.scss']
})
export class NflTimesComponent implements OnInit {

  constructor(
    private _nflService: NflService,
  ) { }

  ngOnInit(): void {

    this._nflService.getTeamsNFL().subscribe((response) => {
      console.log(response)
    })

  }

}
