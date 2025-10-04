import { Component, signal, output } from '@angular/core';
import { Character } from '../../../interfaces/character.interface';

@Component({
  selector: 'dragonball-character-add',
  imports: [],
  templateUrl: './character-add.html',
  styles: ``
})
export class CharacterAdd {
  name = signal('');
  power = signal(0);
  newCharacter = output<Character>();

  addCharacter() {
    if (!this.name() || !this.power() || this.power() < 0) {
      return;
    }

    const newObjectCharacter: Character = {
      id: 1000,
      name: this.name(),
      power: this.power()
    };

    //this.characters.update((list) => [...list, newCharacter]);
    //console.log(newObjectCharacter);
    this.newCharacter.emit(newObjectCharacter);
    this.resetField();
  };
  resetField() {
    this.name.set('');
    this.power.set(0)
  }
}

