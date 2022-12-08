// There was no package GoogleMapsModule in google-maps. -Reid

import { NgModule,Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http'; // importing the http module (for API requests)


// see google-maps README; can also use LoaderOptions
// import { Loader, LoaderOptions } from 'google-maps'

// this is in beta and doesn't seem to work.
// import { AgmCoreModule } from '@agm/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GeoRelativityComponent } from './geo-relativity/geo-relativity.component';
import { PipesPipe } from './pipes.pipe';

@NgModule({
  declarations: [
    AppComponent,
    GeoRelativityComponent,
    PipesPipe,
  ],
  imports: [
    BrowserModule,
    // AgmCoreModule.forRoot({
    //   apiKey: '' // Insert API Key here!
    // }),
    // Loader,
    // LoaderOptions,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
