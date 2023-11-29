import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'shared-lazy-image',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lazy-image.component.html',
  styleUrl: './lazy-image.component.css'
})
export class LazyImageComponent implements OnInit {

  @Input()
  public url!: string;

  @Input()
  public alt: string = '';

  // Prop para validar la carga de la img, la cual inicialmente esta en false pq la img no ha cargado aun
  public hasLoaded: boolean = false;

  ngOnInit(): void {
    throw new Error('Url is required.');
  }

  // Metodo que indica que la imagen fue cargada
  onLoad(){
    setTimeout(() => {
      this.hasLoaded = true
    }, 500);

    console.log('Img loaded')
  }



}
