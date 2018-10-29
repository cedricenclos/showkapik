import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { ShowkapikModule } from './showkapik/showkapik.module'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ShowkapikModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
