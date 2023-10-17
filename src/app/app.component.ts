import { Component } from '@angular/core';
import Place from './interfaces/place';
import { AutenticacionService } from './services/autenticacion.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'miappplaces';
  PlaceAModificar!: Place; 
  Modificando:boolean = false;
  Logeado:boolean = false;
  ARegistrarse: boolean = false;
  NombreUsuario: string = "";

  constructor(private autService: AutenticacionService){

    //this.NombreUsuario = autService.credencialesUsuario.user.DisplayName;
  }

  modificarPlace(place: Place){
    this.Modificando = true;
    this.PlaceAModificar = place;
  }

  ModificadoPlace(){
    this.Modificando = false;
  }

  usuarioLogeado(){
    
    console.log("Estoy en el app.component.ts y el valor de Logeado antes de ejecutar el método es ", this.Logeado);
    this.Logeado = true;
    console.log("Estoy en el app.component.ts y el valor de Logeado después de ejecutar el método es ", this.Logeado);
  }

  aRegistrarse(){
    this.ARegistrarse = true;
  }

  aLogearse(){
    this.ARegistrarse = false;
  }

  salir(){
    this.Logeado = false;
    console.log("aquí debería salir. El valor de this.Logeado es: ", this.Logeado);
  }

}
