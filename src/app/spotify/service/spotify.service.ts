import { IAlbum, IAlbumDetails } from './../model/spotify.model';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

  private apiBase = 'https://api.spotify.com/v1/';

  constructor(private _http: Http) { }

  searchAlbums(query: string): Observable<IAlbum[]> {
    const apiUrl = `${this.apiBase}search?type=album&q=${query}`;
    return this._http.get(apiUrl)
      .map(response => response.json().albums.items);
  }

  getAlbum(id: string): Observable<IAlbumDetails> {
    const apiUrl = `${this.apiBase}albums/${id}`;
    return this._http.get(apiUrl)
      .map(response => response.json());
  }
}
