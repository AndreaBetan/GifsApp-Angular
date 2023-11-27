import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifService } from '../../../gifs/services/gif.service';

@Component({
  selector: 'shared-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  constructor( private gifService: GifService ) {}

  // devuelve el historial de etiquetas del servicio
  get tags (): string [] {
    return this.gifService.tagsHistory
  }
  // se utiliza para realizar la búsqueda de gifs basada en las etiquetas ya buscadas previamente
  searchTag( tag: string ): void {
    this.gifService.searchTag(tag);
  }


}
