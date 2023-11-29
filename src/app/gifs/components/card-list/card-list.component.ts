import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Gif } from '../../interfaces/gifs.interfaces';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'gifs-card-list',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './card-list.component.html',
  styles: ``
})
export class CardListComponent {

  @Input()
  public gifs: Gif [] = []


}
