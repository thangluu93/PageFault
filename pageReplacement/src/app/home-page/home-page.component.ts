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




  run() {
  
    // console.log(this.queue);

    this.dataService.addData(this.queueInput,this.frameSlot);
    // switch (this.type) {
    //   case 'FIFO':{
    this.router.navigate(['fifo']);
    //   }

    //   // default:
    //   //   this.router.navigate(['fifo']);
    // }
  }
}
