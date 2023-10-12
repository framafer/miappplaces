import { Component, OnInit } from '@angular/core';
import Place from "src/app/interfaces/place";
import { PlacesService } from 'src/app/services/places.service';
import { Loader } from "@googlemaps/js-api-loader";



@Component({
  selector: 'app-place-map',
  templateUrl: './place-map.component.html',
  styleUrls: ['./place-map.component.css']
})
export class PlaceMapComponent implements OnInit {

  latitude: number;
  longitude: number;

  places: Place[];




  constructor(
    private placesService: PlacesService
  ) {
    this.latitude = 40;
    this.longitude = -3;
    this.places = [];
  }

  ngOnInit(): void {
    this.placesService.getPlaces().subscribe(places => {
      this.places = places;

      const loader = new Loader({
        apiKey: "AIzaSyBCdmIvuKFOI8nAlQIbx7TiCegFiVLy3E8",
        version: "weekly",
      });
      
      /* let map: google.maps.Map;
      async function initMap(): Promise<void> {
        const { Map } = await google.maps.importLibrary("maps");
        map = new Map(document.getElementById("map") as HTMLElement, {
          center: { lat: -34.397, lng: 150.644 },
          zoom: 8,
        });
      } */
      
      

      let map: google.maps.Map;
      async function initMap(): Promise<void> {
      //@ts-ignore
      const { Map } = await loader.importLibrary("maps");
      map = new Map(document.getElementById("map") as HTMLElement, {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 8,
      });
      }

      initMap();

    })
  }

}
