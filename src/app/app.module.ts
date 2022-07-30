import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { SportsComponent } from './sports/sports.component';
import { BusinessComponent } from './business/business.component';
import { TechnologyComponent } from './technology/technology.component';
import { SourcesComponent } from './sources/sources.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { SubtitlePipe } from './pipes/subtitle.pipe';
import { SearchPipe } from './pipes/search.pipe';
import { FormsModule } from '@angular/forms';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ArticalDetailsComponent } from './artical-details/artical-details.component';
import { CountrystringPipe } from './pipes/countrystring.pipe';
import {NgxPaginationModule} from 'ngx-pagination'; 


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    SportsComponent,
    BusinessComponent,
    TechnologyComponent,
    SourcesComponent,
    FooterComponent,
    SubtitlePipe,
    SearchPipe,
    PageNotFoundComponent,
    ArticalDetailsComponent,
    CountrystringPipe,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule,FormsModule,NgxPaginationModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
