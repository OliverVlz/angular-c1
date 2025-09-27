import { Component, computed, signal } from '@angular/core';
import { NgClass } from '@angular/common';
import { CharacterList } from "../../components/dragonball/character-list/character-list";

interface Character {
  id: number;
  name: string;
  power: number;
}

@Component({
  selector: 'dragonball-super',
  imports: [NgClass, CharacterList],
  templateUrl: './dragonball-super.html'
})
export class DragonballSuperComponent {
  name = signal<string>('');
  power = signal<number>(0);

  characters = signal<Character[]>([
    { id: 1, name: 'Freezer', power: 9000 },
    { id: 2, name: 'Cell', power: 8500 },
    { id: 3, name: 'Majin Buu', power: 7000 },
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
    this.power.set(0)
  }
}
