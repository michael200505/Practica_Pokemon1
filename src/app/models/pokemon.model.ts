export interface PokemonData {
  id: number;
  name: string;
  sprites: {
    front_default: string;
    other?: {
      'official-artwork': {
        front_default: string;
      };
    };
  };
  types: Array<{ type: { name: string; url: string } }>;
  stats: Array<{ base_stat: number; stat: { name: string } }>;
  height: number;
  weight: number;
}

export interface TypeData {
  name: string;
  damage_relations: {
    double_damage_to: Array<{ name: string }>;
    double_damage_from: Array<{ name: string }>;
  };
}

export interface SpeciesData {
  flavor_text_entries: Array<{
    flavor_text: string;
    language: { name: string };
  }>;
  is_legendary: boolean;
  is_mythical: boolean;
  habitat: { name: string } | null;
  capture_rate: number;
}