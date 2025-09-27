import { UpperCasePipe } from "@angular/common";
import { ChangeDetectionStrategy, Component, computed, Pipe, signal, WritableSignal } from "@angular/core";

@Component({
  templateUrl: './car.component.html',
  imports: [UpperCasePipe],
  //changeDetection: ChangeDetectionStrategy.OnPush
})
export class CarComponent {
  brandSignal = signal('Renault');
  yearSignal = signal(2020);
  studentSignal = signal('oliver');
  getCarComputed = computed(() => `${this.brandSignal()} - ${this.yearSignal()}`);

  constructor(){
    setInterval(() => {
      //this.counter++;
      //this.getCarDescription();
    }, 1000);
  }

  getStudentNameUppercase() {
    return this.studentSignal().toUpperCase();
  }
  /*
  getCarDescription() {
    return `${this.brandSignal()} - ${this.yearSignal()}`;
  }*/

  changeCar(){
    this.brandSignal.update((brandSignal:string) => 'Kia');
    this.yearSignal.update((yearSignal:number) => 2021);
  }

  resetForm(){
    this.brandSignal.update((brandSignal:string) => 'Renault');
    this.yearSignal.update((yearSignal:number) => 2020);
  }

  changeYear(){
    this.yearSignal.update((yearSignal:number) => 2025);
  }
}

