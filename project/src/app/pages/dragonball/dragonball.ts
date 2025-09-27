import { Component, computed, signal } from '@angular/core';
import { NgClass } from '@angular/common';

interface Character {
  id: number;
  name: string;
  power: number;
}

@Component({
  selector: 'dragonball',
  imports: [NgClass],
  templateUrl: './dragonball.html'
})
export class DragonballComponent {
  name = signal<string>('');
  power = signal<number>(0);

  characters = signal<Character[]>([
    { id: 1, name: 'Goku', power: 9000 },
    { id: 2, name: 'Vegeta', power: 8500 },
    { id: 3, name: 'Gohan', power: 7000 },
    { id: 4, name: 'Yamcha', power: 500 },
  ]);

  powerClass = computed(() => {
    return {
      'text-danger': true
    }
  });

  addCharacter() {
    if (!this.name() || !this.power() || this.power() < 0) {
      return;
    }

    const newCharacter: Character = {
      id: this.characters().length + 1,
      name: this.name(),
      power: this.power()
    };
/*
    const object = {
      name: this.name(),
      apellido: 'perez'
    };
    console.log(object);

    const newOject = {
      ...object,
      edad: 30,
      name: 'Juan'
    };
    console.log(newOject);
*/
    //const newListCharacters = [...this.characters(), newCharacter];
    this.characters.update((list) => [...list, newCharacter]);
    this.resetField();
  };
  resetField() {
    this.name.set('');
    this.power.set(0);
  }
}
