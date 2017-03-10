import { FormBuilder, FormGroup } from '@angular/forms';
import { BookmarksService } from './../../../bookmarks/service/bookmarks.service';
import { IAlbum } from './../../model/spotify.model';
import { SpotifyService } from './../../service/spotify.service';
import { Component, OnInit, trigger, state, style, transition, animate, ViewEncapsulation } from '@angular/core';

import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  animations: [
    trigger('flyInOut', [
      state('in', style({ transform: 'translateX(0)' })),
      transition('void => *', [
        style({ transform: 'translateX(-25%)' }),
        animate('800ms, ease-in')
      ]),
      transition('* => void', [
        animate(100, style({ transform: 'translateX(100%)' }))
      ])
    ]),
    trigger('heroState', [
      state('inactive', style({
        backgroundColor: '#eee',
        transform: 'scale(1)'
      })),
      state('active', style({
        backgroundColor: '#cfd8dc',
        transform: 'scale(1.1)'
      })),
      transition('inactive => active', animate('100ms ease-in')),
      transition('active => inactive', animate('100ms ease-out'))
    ])
  ]
})
export class SearchComponent implements OnInit {

  _albums: IAlbum[];
  query: string;
  searchForm: FormGroup;

  constructor(private _spotifyService: SpotifyService, private _bookmarkService: BookmarksService, private _fb: FormBuilder) { }

  ngOnInit() {
    this.searchForm = this._fb.group({ query: [] });
    this.searchForm.valueChanges.debounceTime(200).distinctUntilChanged().subscribe(({ query }) => this.search(query));
  }

  search(query: string) {
    this._spotifyService.searchAlbums(query).subscribe(albums => this._albums = albums);
  }

  getBookmarks() {
    return this._bookmarkService.getAll();
  }

  saveBookmark(album: IAlbum) {
    this._bookmarkService.add(album);
  }
}
