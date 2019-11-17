import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { AllmarketsComponent } from './allmarkets/allmarkets.component';
import { PortalComponent } from './portal/portal.component';
import { WatchlistComponent } from './watchlist/watchlist.component';
import { OpenordersComponent } from './openorders/openorders.component';
import { MarkethistoryComponent } from './markethistory/markethistory.component';
import { MyorderhistoryComponent } from './myorderhistory/myorderhistory.component';
import { SpreadComponent } from './spread/spread.component';
import { NewsComponent } from './news/news.component';
import { ColorpanelComponent } from './colorpanel/colorpanel.component';
import { NavbartopComponent } from './navbartop/navbartop.component';
import { AsideComponent } from './aside/aside.component';
import {RouterModule} from '@angular/router';
import {appRoutes}from './routerConfig';
import { Route1Component } from './route1/route1.component';
import {Route3Component} from './route3/route3.component';
import{ NewsApiService } from './news-api.service';
import {OrderService} from './order.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Stock service imports begin
import { Ng2SearchPipeModule} from 'ng2-search-filter';
import {Ng2OrderModule} from 'ng2-order-pipe';
import {NgxPaginationModule} from 'ngx-pagination';
import { AgGridModule } from 'ag-grid-angular';
import { StockService} from './stock.service';





@NgModule({
  declarations: [
    AppComponent,
    AllmarketsComponent,
    PortalComponent,
    WatchlistComponent,
    OpenordersComponent,
    MarkethistoryComponent,
    MyorderhistoryComponent,
    SpreadComponent,
    NewsComponent,
    ColorpanelComponent,
    NavbartopComponent,
    AsideComponent,
    Route1Component,
    Route3Component,
   
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    Ng2SearchPipeModule,
    NgxPaginationModule,
    AgGridModule.withComponents([]),
    Ng2OrderModule
  
  ],
  providers: [NewsApiService,OrderService,StockService],
  bootstrap: [AppComponent]
})
export class AppModule { }
