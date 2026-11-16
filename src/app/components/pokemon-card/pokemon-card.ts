import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonData } from '../../models/pokemon.model';

@Component({
  selector: 'app-pokemon-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pokemon-card.html',
  styleUrl: './pokemon-card.css'
})
export class PokemonCardComponent {
  @Input() pokemon: PokemonData | null = null;
}