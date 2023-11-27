import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifService } from '../../services/gif.service';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'gifs-card-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-list.component.html',
  styles: ``
})
export class CardListComponent {

  @Input()
  public gifs: Gif [] = []


}
