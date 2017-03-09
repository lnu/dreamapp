import { IAlbum, Size } from './../model/spotify.model';
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
