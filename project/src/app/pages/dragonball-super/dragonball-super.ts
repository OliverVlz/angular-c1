import { Component, inject } from '@angular/core';
import { CharacterList } from "../../components/dragonball/character-list/character-list";
import { CharacterAdd } from "../../components/dragonball/character-add/character-add";
import { Dragonball } from '../../services/dragonball';

interface Character {
  id: number;
  name: string;
  power: number;
}

@Component({
  selector: 'dragonball-super',
  imports: [CharacterList, CharacterAdd],
  templateUrl: './dragonball-super.html'
})

export class DragonballSuperComponent {

  /*constructor(
    public dragonballService: Dragonball
  ) {
  }*/
 public dragonballService = inject(Dragonball);

}
