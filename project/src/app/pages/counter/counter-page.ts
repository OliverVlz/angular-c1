import { ChangeDetectionStrategy, Component, signal, WritableSignal } from "@angular/core";

@Component({
  templateUrl: './buttons.html',
  styleUrls: ['./buttons.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CounterPage {
  counter:number = 0;
  counterSignal:WritableSignal<number> = signal(0);

  constructor(){
    setInterval(() => {
      //this.counter++;
      this.counterSignal.update((currentValue:number) => currentValue + 1);
    }, 1000);
  }
  add(value:number) {
    this.counter += value;
    this.counterSignal.update((currentValue:number) => currentValue + value);
  }

  decrease(value:number){
    this.counter -= value;
    this.counterSignal.update((currentValue:number) => currentValue - value);
  }

  delete() {
    this.counterSignal.set(0);
    this.counter = 0;
  }
}
