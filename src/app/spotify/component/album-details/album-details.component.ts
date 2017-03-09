import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: 'app-album-details',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.scss']
})
export class AlbumDetailsComponent implements OnInit {

  constructor(private _route: ActivatedRoute) {  }

  ngOnInit() {
     this._route.params.forEach((params: Params) => {
            let id = +params['id'];
            //this._spotifyService.getHero(id).subscribe(hero => this.hero = hero);
        });
  }

}
