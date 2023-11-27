import { Component, ElementRef, ViewChild, } from '@angular/core';
import { GifService } from '../../services/gif.service';

@Component({
  selector: 'gif-search-box',
  standalone: true,
  template: `
    <h5>Burcar:</h5>
    <input
    type="text"
    class="form-control"
    placeholder="Burcar gifs.."
    (keyup.enter)="searchTag()"
    #txtTagInput
    >
  `
})

//keyup.enter Cuando se presiona una tecla en este campo de entrada, se llama a la función searchTag con el valor actual del campo de entrada como argumento.
// #txtTagInput Es una referencia que se utiliza para acceder al valor del campo de entrada en el código Angular.

export class SearchBoxComponent {

  // el ViewChild sirve para tomar una ref En este caso al elemento con la etiqueta #txtTagInput.
    // La referencia se almacena en la propiedad tagInput, que es de tipo ElementRef<HTMLInputElement>
  @ViewChild('txtTagInput')
  public tagInput!: ElementRef<HTMLInputElement>;

  // Para usar los servicios hay que injectarlos asi:
  constructor( private gifService: GifService ) { }

  searchTag () {
    // obtiene el valor actual del campo de entrada de texto
    const newTag = this.tagInput.nativeElement.value
    // Agrego el nuevo valor y lo almaceno en el servicio
    this.gifService.searchTag( newTag )
    //Al enviar los datos el input vuelve a ser ''
    this.tagInput.nativeElement.value = ''

    // console.log(this.tags);
  }
}
