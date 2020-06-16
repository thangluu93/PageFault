import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor () {
  }
  
  data={
    'queue':null,
    'frameSlot':null
  }



  addData(queue, frame) {
    this.data.queue=queue
    this.data.frameSlot=frame;
  }

  getData() {

    return this.data;
  }

}

export interface Data {
  queue: object;
  frameSlot: number;
}