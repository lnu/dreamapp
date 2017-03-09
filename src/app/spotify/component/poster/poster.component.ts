import { IAlbum, Size } from './../../model/spotify.model';
import { Component, OnInit, Input, trigger, state, style, transition, animate  } from '@angular/core';

import * as _ from 'lodash';

@Component({
  selector: 'app-poster',
  templateUrl: './poster.component.html',
  styleUrls: ['./poster.component.scss'],
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
    ])
   ]
})
export class PosterComponent implements OnInit {

  @Input() album: IAlbum;
  @Input() size: string;

  imageUrl: any;

  constructor() {
  }

  ngOnInit() {
    const sizeIndex = Size[this.size];
    const placeholder = 'http://www.the-music-shop.com/wp-content/uploads/2015/02/placeholder.png';
    this.imageUrl = _.get(this.album, `images[${sizeIndex}].url`, placeholder); 
  }
}
