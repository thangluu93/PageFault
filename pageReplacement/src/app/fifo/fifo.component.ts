import { Component, OnInit, ElementRef } from '@angular/core';

import anime from 'animejs/lib/anime.es';
import { DataService } from '../data.service';
import { HomePageModule } from '../home-page/home-page.module';

@Component({
  selector: 'app-fifo',
  templateUrl: './fifo.component.html',
  styleUrls: ['./fifo.component.scss']
})
export class FifoComponent implements OnInit {

  constructor(public dataService: DataService,
    // public el:ElementRef
  ) { }
  data;
  frame = [];


  ngOnInit(): void {
    this.data = this.dataService.getData();
    this.createFrame();
  }

  createFrame() {
    for (let i = 0; i < this.data.frameSlot; i++) {
      this.frame[i] = null;
    }
    console.log(this.frame);
  }

  play() {
    anime({
      targets: '.queue',
      translateY: [
        { value: 200, duration: 1000 },
        { value: 0, duration: 1000 }
      ],
      rotate: {
        value: '1turn',
        easing: 'easeInOutSine'
      },
      delay: function (el, i, l) { return i * 1000 },
      autoplay: true,
      loop: true
    });
  }

  checkExsit(queue, frameSlot, frame) {
    //check exist in frame
    for (let j = 0; j < frameSlot; j++) {
      if (queue === frame[j]) {
        return true;
      }
    };
    return false;
  }


  fifo() {
    let index = 0; //index of frame
    for (let i = 0; i < this.data.queue.length; i++) {
      let isExsit = this.checkExsit(this.data.queue[i], this.data.frameSlot, this.frame);
      // console.log(isExsit);
      if (!isExsit) {
        this.frame[index] = this.data.queue[i];
        index = ((index + 1) + this.data.frameSlot) % this.data.frameSlot; //loop from,
      }
    }
  }
}
