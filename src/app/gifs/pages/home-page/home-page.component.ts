import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBoxComponent } from '../../components/search-box/search-box.component';
import { CardListComponent } from '../../components/card-list/card-list.component';
import { GifService } from '../../services/gif.service';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'gifs-home-page',
  standalone: true,
  imports: [
    CommonModule,
    SearchBoxComponent,
    CardListComponent,
  ],
  templateUrl: './home-page.component.html',
  styles: ``
})
export class HomePageComponent {

  // Inyectar el servicio
  constructor ( private gifsService: GifService ) {}

  // Obetener el arr de gifs
  get gifs(): Gif[] {
    return this.gifsService.gifsList
  }
}
