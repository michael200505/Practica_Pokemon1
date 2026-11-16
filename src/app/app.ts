import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokeapiService } from './services/pokeapi';
import { PokemonData, TypeData, SpeciesData } from './models/pokemon.model';

import { PokemonSearchComponent } from './components/pokemon-search/pokemon-search';
import { PokemonCardComponent } from './components/pokemon-card/pokemon-card';
import { TypeRelationsComponent } from './components/type-relations/type-relations';
import { PokemonDetailsComponent } from './components/pokemon-details/pokemon-details';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    PokemonSearchComponent,
    PokemonCardComponent,
    TypeRelationsComponent,
    PokemonDetailsComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  pokemon: PokemonData | null = null;
  typeInfo: TypeData | null = null;
  speciesInfo: SpeciesData | null = null;
  loading: boolean = false;
  errorMessage: string = '';

  constructor(private pokeService: PokeapiService) {}

  handleSearch(searchTerm: string) {
    this.loading = true;
    this.errorMessage = '';
    this.pokemon = null;
    this.typeInfo = null;
    this.speciesInfo = null;

    this.pokeService.getPokemon(searchTerm).subscribe({
      next: (pData) => {
        this.pokemon = pData;

        if (pData.types.length > 0) {
          this.pokeService.getTypeDetails(pData.types[0].type.name).subscribe({
            next: (tData) => this.typeInfo = tData
          });
        }

        this.pokeService.getSpeciesDetails(pData.id).subscribe({
          next: (sData) => {
            this.speciesInfo = sData;
            this.loading = false;
          },
          error: () => this.loading = false
        });
      },
      error: () => {
        this.errorMessage = 'No se encontró el Pokémon especificado. Verifica el nombre o ID.';
        this.loading = false;
      }
    });
  }
}