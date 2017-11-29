import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { MutualfundsComponent } from './mutualfunds/mutualfunds.component';
import { StocksComponent } from './stocks.component';
import { HighlightDirective } from './highlight.directive';
import { StockDirective } from './stock-directive.directive';
import { StockService } from './stock.service';
import { CapitalizePipe } from './capitalize.pipe';
import { EmployeeNamePipe } from './employee-name.pipe';
import { routing } from './app.routing';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CurrencyService } from './currency.service';
import { BondsDirective } from './bonds.directive';


@NgModule({
  declarations: [
    AppComponent,
    MutualfundsComponent,
    StocksComponent,
    HighlightDirective,
    StockDirective,
    CapitalizePipe,
    EmployeeNamePipe,
    DashboardComponent,
    BondsDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  providers: [StockService, CurrencyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
