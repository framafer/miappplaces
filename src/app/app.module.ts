import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NewPlaceComponent } from './components/new-place/new-place.component';
import { PlaceListComponent } from './components/place-list/place-list.component';
import { PlaceMapComponent } from './components/place-map/place-map.component';
//import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AgmCoreModule } from '@agm/core';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { ModPlaceComponent } from './components/mod-place/mod-place.component';

@NgModule({
  declarations: [
    AppComponent,
    NewPlaceComponent,
    PlaceListComponent,
    PlaceMapComponent,
    ModPlaceComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBCdmIvuKFOI8nAlQIbx7TiCegFiVLy3E8'
    }),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
