import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { MutualfundsComponent } from './mutualfunds/mutualfunds.component';
import { StocksComponent } from './stocks.component';
import { HighlightDirective } from './highlight.directive';
import { StockDirectiveDirective } from './stock-directive.directive';
import { StockService } from './stock.service';
import { CapitalizePipe } from './capitalize.pipe';
import { EmployeeNamePipe } from './employee-name.pipe';
import { routing } from './app.routing';


@NgModule({
  declarations: [
    AppComponent,
    MutualfundsComponent,
    StocksComponent,
    HighlightDirective,
    StockDirectiveDirective,
    CapitalizePipe,
    EmployeeNamePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  providers: [StockService],
  bootstrap: [AppComponent]
})
export class AppModule { }
