import { AlbumDetailsGuard } from './component/album-details/album-details.guard';
import { AlbumDetailsResolver } from './component/album-details/album-details.resolver';
import { RouterModule } from '@angular/router';
import { BookmarksModule } from './../bookmarks/bookmarks.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SpotifyService } from './service/spotify.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './component/search/search.component';
import { PosterComponent } from './component/poster/poster.component';
import { AlbumDetailsComponent } from './component/album-details/album-details.component';
import { MsToMinutesPipe } from './pipe/ms-to-minutes.pipe';
import { SafeHtmlPipe } from './pipe/safe-html.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    BookmarksModule,
    ReactiveFormsModule
  ],
  declarations: [SearchComponent, PosterComponent, AlbumDetailsComponent, MsToMinutesPipe, SafeHtmlPipe],
  providers: [
    SpotifyService,
    AlbumDetailsResolver,
    AlbumDetailsGuard
  ]
})
export class SpotifyModule { }
