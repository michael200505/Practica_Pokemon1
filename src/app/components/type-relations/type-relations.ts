import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TypeData } from '../../models/pokemon.model';

@Component({
  selector: 'app-type-relations',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './type-relations.html',
  styleUrl: './type-relations.css'
})
export class TypeRelationsComponent {
  @Input() typeInfo: TypeData | null = null;
}