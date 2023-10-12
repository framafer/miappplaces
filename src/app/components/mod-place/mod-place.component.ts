import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import Place from 'src/app/interfaces/place';
import { PlacesService } from 'src/app/services/places.service';

@Component({
  selector: 'app-mod-place',
  templateUrl: './mod-place.component.html',
  styleUrls: ['./mod-place.component.css']
})
export class ModPlaceComponent implements OnInit{

  @Input() placeAModificar!: Place;

  @Output() eventoModificadoPlace = new EventEmitter();


  placeForm: FormGroup;
  ElId: any;

  constructor(
    private placesService: PlacesService
  ) {

    this.ElId = "";
    this.placeForm = new FormGroup({
      name: new FormControl(),
      latitude: new FormControl(),
      longitude: new FormControl(),
      description: new FormControl(),
      image: new FormControl()
    })
  }

  ngOnInit(): void {
    console.log("El place a modificar", this.placeAModificar);
    this.setFormValues();
  }

  onSubmit() {
    const response =  this.placesService.updatePlace(this.placeAModificar, this.placeForm.value);
    this.eventoModificadoPlace.emit();
    console.log(response);
  }



  private setFormValues() {
    if (this.placeAModificar) {
      this.placeForm.patchValue({
        name: this.placeAModificar.name,
        latitude: this.placeAModificar.latitude,
        longitude: this.placeAModificar.longitude,
        description: this.placeAModificar.description,
        image: this.placeAModificar.image
        
      });
    }
  }



}



