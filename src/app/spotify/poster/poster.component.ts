import { IAlbum, Size } from './../model/spotify.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-poster',
  templateUrl: './poster.component.html',
  styleUrls: ['./poster.component.scss']
})
export class PosterComponent implements OnInit {

  @Input() album: IAlbum;
  @Input() size: string;

  imageUrl: string;

  constructor() { 
  }

  ngOnInit() {
    const sizeIndex = Size[this.size];
    this.imageUrl = this.album.images[sizeIndex].url;
  }
}
