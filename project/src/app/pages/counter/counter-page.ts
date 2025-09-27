import { Component } from "@angular/core";

@Component({
  templateUrl: './buttons.html',
  styleUrl: './buttons.css',
})

export class CounterPage {
  counter:number = 0;

  add(value:number) {
    this.counter += value;
  }

  decrese(value:number){
    this.counter -= value;
  }

  delete() {
    this.counter = 0;
  }
}
