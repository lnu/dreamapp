import { BookmarksService } from './service/bookmarks.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers:[
    BookmarksService
  ]
})
export class BookmarksModule { }
