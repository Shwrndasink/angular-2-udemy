import { Component } from '@angular/core';
import { StockService } from './stock.service';

@Component({
    selector: 'stocks',
    template: `<h2>{{title}}</h2>
        <ul>
            <li *ngFor="let stock of stocks">
                {{stock}}
            </li>
        </ul>
    `
})

export class StocksComponent{
    title = 'List of Stocks';
    stocks;
    // stocks = ['AAPL', 'IBM', 'GOOGL', 'SQ'];

    constructor(stockService: StockService){
        this.stocks = stockService.getStocks();
    }
}