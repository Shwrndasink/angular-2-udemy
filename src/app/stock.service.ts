import { Injectable } from '@angular/core';

@Injectable()

export class StockService{
    getStocks() : string[]{
        return ['AAPL', 'IBM', 'GOOGL', 'SQ', 'TMUS', 'XYZ'];
    }
}