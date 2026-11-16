import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpeciesData } from '../../models/pokemon.model';

@Component({
  selector: 'app-pokemon-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pokemon-details.html',
  styleUrl: './pokemon-details.css'
})
export class PokemonDetailsComponent {
  @Input() speciesInfo: SpeciesData | null = null;

  get SpanishDescription(): string {
    if (!this.speciesInfo) return '';
    const entry = this.speciesInfo.flavor_text_entries.find(e => e.language.name === 'es');
    return entry ? entry.flavor_text.replace(/[\n\f]/g, ' ') : 'Descripción no disponible en español.';
  }
}