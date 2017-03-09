import { IAlbum } from './../../model/spotify.model';
import { SpotifyService } from './../../service/spotify.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  
  _albums: IAlbum[];

  constructor(private _spotifyService: SpotifyService) {  }

  ngOnInit() {  }
  
  search(query: string){
    this._spotifyService.searchAlbums(query).subscribe(albums => this._albums = albums);
  }

}
