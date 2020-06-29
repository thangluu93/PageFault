import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../data.service';


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


    switch (this.type) {
      case 'FIFO': {
        this.dataService.addData(this.queueInput, this.frameSlot);
        this.router.navigate(['fifo']);
        break
      };
      case 'LRU': {
        this.router.navigate(['lru']);
        break
      };
      case 'CLOCK': {
        this.router.navigate(["clock"]);
        break;
      };
      case 'OPTIMAL': {
        this.router.navigate(["optimal"]);
        break;
      };
      // default:
      //   this.router.navigate(['fifo']);
    }
  }
}
