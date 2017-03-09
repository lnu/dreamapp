import { Http } from '@angular/http';
import { IBookmark, BookmarkId } from './../model/bookmarks.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';


import 'rxjs/add/operator/map';


@Injectable()
export class BookmarksService {

  private _bookmarks: IBookmark[] = [];
  private apiBase = 'https://api.spotify.com/v1/';


  constructor(private _http: Http) { }

  getAll(): IBookmark[] {
    return [... this._bookmarks];
  }

  add(item: IBookmark): void {
    this._bookmarks.push(item);
  }

  remove(id: BookmarkId): void {
    this._bookmarks = this._bookmarks.filter(item => item.id !== id);
  }

  has(id: BookmarkId): boolean {
    return this._bookmarks.some(item => item.id === id);
  } 
}
