import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'ma-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @Input() owner: string;
  @Output() timePassed = new EventEmitter<number>();

  constructor() {
    setInterval(() => {
      this.timePassed.emit(+new Date());
    }, 1000);
  }

  ngOnInit() {
  }

}
