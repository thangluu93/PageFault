import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { queue } from 'rxjs/internal/scheduler/queue';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(public router: Router, public dataService: DataService) { }

  ngOnInit(): void {
  }

  queueInput: String;
  pageFaultType: string[] = ['FIFO', 'CLOCK', 'LRU', 'OPTIMAL'];
  type: String;
  frameSlot;
  queue: number[] = []

  inputArray(input) {
    let queue = [];

    for (let i = 0; i < input.length; i++) {
      if (input[i] != ' ' && input[i] != ',') {
        queue.push(parseInt(input[i]));
      }
    }
    return queue;

  }

  run() {
    this.queue = this.inputArray(this.queueInput);
    // console.log(this.queue);

    this.dataService.addData(this.queue,this.frameSlot);
    // switch (this.type) {
    //   case 'FIFO':{
    this.router.navigate(['fifo']);
    //   }

    //   // default:
    //   //   this.router.navigate(['fifo']);
    // }
  }
}
