import { IAlbum, IAlbumDetails } from './../../model/spotify.model';
import { SpotifyService } from './../../service/spotify.service';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

export interface IAlbumDetailsParams{
  id: string;
}

@Component({
  selector: 'app-album-details',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.scss'] 
})
export class AlbumDetailsComponent implements OnInit {

  @Input() album: IAlbumDetails;

  constructor(private _route: ActivatedRoute, private _spotifyService: SpotifyService) {

  }

  ngOnInit() {
    this.album  = this._route.snapshot.data['album'];
    //  this._route.params.forEach((params: Params) => {
    //         let id = +params['id'];
    //         //this._spotifyService.getHero(id).subscribe(hero => this.hero = hero);

    //     });
  // const id = (<IAlbumDetailsParams> this._route.snapshot.params).id ;
  //             this._spotifyService.getAlbum(id).subscribe(album => this.album = album);

  }

}
