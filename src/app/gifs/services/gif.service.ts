import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchResponse } from '../interfaces/gifs.interfaces';

@Injectable({
  // El proveIn root hace que este servicio este disponible en toda la app
  providedIn: 'root'
})
export class GifService {

  // Almacenar los gifs que se encuentran en la interfaz
  public gifsList: Gif[] = []

  private _tagsHistory: string[] = [];
  private apiKey: string = 'zslN1duMBVEgF1q3drRD6DR392DoJKJs'
  private serviceUrl : string = 'https://api.giphy.com/v1/gifs'

  // Importar el HttpModule en el app.config.ts primero
  constructor(private http: HttpClient) {
    this.loadLocalStorage()
  }

  // Almacenar los datos en el localStorange
  private saveLocalStorage(): void {
    if (typeof localStorage !== undefined)
      localStorage.setItem('history', JSON.stringify(this._tagsHistory))
  }

  private loadLocalStorage(): void {
    if (typeof localStorage !== 'undefined' && localStorage.getItem('history')) {
      this._tagsHistory = JSON.parse(localStorage.getItem('history')!);

      if (this._tagsHistory.length === 0) return;
      this.searchTag(this._tagsHistory[0]);
    }
  }

  get tagsHistory() {
    return[...this._tagsHistory]
  }

  private organizeHistory( tag: string) {
    // Paso todo el texto a minuscula
    tag = tag.toLowerCase()

    //Realizar la busqueda del tag buscado mediante el includes
    if ( this._tagsHistory.includes(tag)){
    // Si el tag antiguo es diferente al tag nuevo, hace parte del nuevo arr
    this._tagsHistory = this._tagsHistory.filter( oldTag => oldTag !== tag)
    }
    // Poene el tag nuevo de primero en el arr
    this._tagsHistory.unshift(tag)
    //Devuelve un arr de 10 elementos
    this._tagsHistory = this._tagsHistory.splice(0,10)
    // Almacenar la info en el localStorange
    this.saveLocalStorage();
  }

  searchTag( tag: string ):void {

    // De esta forma si no se escribe nada en el campo de entrada, no se genera ningun elemento en la lista
    if( tag.length === 0 ) return
    this.organizeHistory(tag);

    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('limit', '10')
      // tag es elemento de la busqueda
      .set('q', tag)

    // Esto es un observable: Es un objeto en el cual a lo largo del tiempo, puede estar emitiendo diferentes valores.
    // SearchResponse es la interfaz donde se definen los tipos de datos de la Api
    this.http.get<SearchResponse>(`${ this.serviceUrl }/search`, { params })
      .subscribe( resp => {

        this.gifsList = resp.data
        console.log( this.gifsList);
      })
  }
}
