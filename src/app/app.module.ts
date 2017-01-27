import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SplitPaneModule } from 'ng2-split-pane/src/ng2-split-pane';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    SplitPaneModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
