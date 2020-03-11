import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
//import { MatCardModule} from '@angular/material/card';
//import { MatInputModule} from '@angular/material/input';


import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeroesComponent } from './heroes/heroes.component';


@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule
    
    //MatCardModule,
    //MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
