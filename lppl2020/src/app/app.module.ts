import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './Components/homepage/homepage.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { MatchResultComponent } from './Components/match-result/match-result.component';
import { WeekWinnersComponent } from './Components/week-winners/week-winners.component';
import { AllGameResultsComponent } from './Components/all-game-results/all-game-results.component';
import { RanktableComponent } from './Components/ranktable/ranktable.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {Sort} from '@angular/material/sort';
import { GamerulesComponent } from './Components/gamerules/gamerules.component';
import {RankServiceService} from './Services/rank-service.service';
import { AccuracyCalculatorComponent } from './Components/accuracy-calculator/accuracy-calculator.component';
import { FormsModule } from '@angular/forms'; 
@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    HeaderComponent,
    FooterComponent,
    MatchResultComponent,
    WeekWinnersComponent,
    AllGameResultsComponent,
    RanktableComponent,
    GamerulesComponent,
    AccuracyCalculatorComponent
  ],
  imports: [
    //HttpClient,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FontAwesomeModule,
    FormsModule
  ],
  providers: [RankServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
