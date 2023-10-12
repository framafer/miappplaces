import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, collectionData, doc, deleteDoc, updateDoc } from '@angular/fire/firestore';
import Place from '../interfaces/place';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  constructor(private firestore:Firestore) { }


  addPlace(place:Place){
    const placeRef = collection(this.firestore, 'places');
    return addDoc(placeRef, place);
  }

  getPlaces(): Observable<Place[]> {
    const placeRef = collection(this.firestore, 'places');
    return collectionData(placeRef, { idField: 'id' }) as Observable<Place[]>;
  }

  deletePlace(place: Place) {
    const placeDocRef = doc(this.firestore, `places/${place.id}`);
    return deleteDoc(placeDocRef);
  }

  updatePlace(place: Place, placeActualizado:Place){

    const placeDocRef = doc(this.firestore, `places/${place.id}`);
    updateDoc(placeDocRef, 
      { name: placeActualizado.name,
        latitude: placeActualizado.latitude,
        longitude: placeActualizado.longitude,
        description: placeActualizado.description,
        image: placeActualizado.image
      }
    )  
    /* return updateDoc(placeDocRef, 
      
      ); */
  }


  /* const cityRef = db.collection('cities').doc('DC');

// Set the 'capital' field of the city
const res = await cityRef.update({capital: true}); */
}
