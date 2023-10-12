import { Component } from '@angular/core';
import Place from './interfaces/place';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'miappplaces';
  PlaceAModificar!: Place; 
  Modificando:boolean = false;

  modificarPlace(place: Place){
    this.Modificando = true;
    this.PlaceAModificar = place;
  }

  ModificadoPlace(){
    this.Modificando = false;
  }

}
