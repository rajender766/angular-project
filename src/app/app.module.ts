import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.cpmponent';
import { TopHeaderComponent } from './top-header/top-header.component';
import { TopMenuComponent } from './header/top-menu/top-menu.component';
import { SearchComponent } from './container/search/search.component';
import { ContainerComponent } from './container/container.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TopHeaderComponent,
    TopMenuComponent,
    ContainerComponent,
    SearchComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
