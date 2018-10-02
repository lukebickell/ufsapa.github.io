import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavheaderComponent } from './navheader/navheader.component';
import { MemberListComponent } from './member-list/member-list.component';
import { FilterPipe} from './filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavheaderComponent,
    MemberListComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
