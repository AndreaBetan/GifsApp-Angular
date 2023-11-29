import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Gif } from '../../interfaces/gifs.interfaces';
import { LazyImageComponent } from '../../../shared/lazy-image/lazy-image.component';

@Component({
  selector: 'gif-card',
  standalone: true,
  imports: [CommonModule, LazyImageComponent],
  templateUrl: './card.component.html',
  styles: ``
})
export class CardComponent implements OnInit {

  //  Esta propiedad se utilizará para pasar datos al componente desde el componente padre.
  @Input()
  //(!) indica que estamos diciendo a TypeScript que confíe en nosotros y que la propiedad gif estará definida cuando se acceda a ella.
  public gif!: Gif;

  // Este método se ejecutará automáticamente después de que Angular haya inicializado las propiedades del componente.
  ngOnInit(): void {
    // Si this.gif es null o undefined, se lanza un error
    if ( !this.gif ) throw new Error('Gif property is required');
  }


}
