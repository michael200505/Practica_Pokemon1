import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PokemonData, TypeData, SpeciesData } from '../models/pokemon.model';

@Injectable({
  providedIn: 'root'
})
export class PokeapiService {
  private baseUrl = 'https://pokeapi.co/api/v2';

  constructor(private http: HttpClient) {}

  // Endpoint 1: Datos principales del Pokémon (/pokemon/{id_o_nombre})
  getPokemon(param: string | number): Observable<PokemonData> {
    return this.http.get<PokemonData>(`${this.baseUrl}/pokemon/${param.toString().toLowerCase()}`);
  }

  // Endpoint 2: Relaciones y efectividad de tipo (/type/{id_o_nombre})
  getTypeDetails(typeName: string): Observable<TypeData> {
    return this.http.get<TypeData>(`${this.baseUrl}/type/${typeName.toLowerCase()}`);
  }

  // Endpoint 3: Información de especie y contexto (/pokemon-species/{id_o_nombre})
  getSpeciesDetails(param: string | number): Observable<SpeciesData> {
    return this.http.get<SpeciesData>(`${this.baseUrl}/pokemon-species/${param.toString().toLowerCase()}`);
  }
}