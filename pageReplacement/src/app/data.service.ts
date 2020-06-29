import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() {
  }
  // queue: number[] = []

  data = {
    'queue': null,
    'frameSlot': null
  }

  inputArray(input) {
    let queue = [];
    for (let i = 0; i < input.length; i++) {
      if (input[i] != ' ' && input[i] != ',') {
        queue.push(parseInt(input[i]));
      }
    }
    return queue;
  }

  addData(queue, frame) {
    this.data.queue = this.inputArray(queue);
    this.data.frameSlot = frame;
    console.log(this.data);
  }

  getData() {
    return this.data;
  }

}

export interface Data {
  queue: object;
  frameSlot: number;
  id: number
}