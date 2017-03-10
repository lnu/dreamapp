import { Injectable } from '@angular/core';
import { SpotifyService } from './../../service/spotify.service';
import { Observable } from 'rxjs/Observable';
import { IAlbum, IAlbumDetails } from './../../model/spotify.model';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

@Injectable()
export class AlbumDetailsResolver implements Resolve<IAlbumDetails>
{
    constructor(private _spotify: SpotifyService) {

    }

    resolve(route: ActivatedRouteSnapshot): Observable<IAlbumDetails> {
        return this._spotify.getAlbum(route.params['id']);
    }
}