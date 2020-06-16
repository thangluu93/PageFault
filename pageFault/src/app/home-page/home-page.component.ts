import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  queueInput: String;
  pageFaultType:string[]=['FIFO','CLOCK','LRU','OPTIMAL'];
  type:String;


  inputArray(input) {
    let queue = [];

    for (let i = 0; i < input.length; i++) {
      if (input[i] != ' ' && queue[i] != ',') {
        queue.push(parseInt(input[i]));
      }
    }
    return queue;

  }


  getInput(queue,frameslot,type) {
    
    // let frameslot = parseInt(getFrameSlot());
    // let type = getTypeOfPageReplacement();
    // switch (type) {
    //   case 'fifo': {
    //     window.location.href = './fifo/fifo.html';
    //     break;
    //   }
    //   case 'clock': {
    //     window.location.href = './clock/clock.html';
    //     break;
    //   }
    //   case 'lru': {
    //     window.location.href = './lru/lru.html'
    //     break;
    //   }
    //   case 'optimal': {
    //     window.location.href = './optimal/optimal.html'
    //     break;
    //   }
    // }
    this.queueInput;
    console.log(this.queueInput)
  }

}
