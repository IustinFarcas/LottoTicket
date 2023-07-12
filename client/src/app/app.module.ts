import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NewTicketComponent } from './new-ticket/new-ticket.component';
import { BoxNumberComponent } from './shared/box/box-number/box-number.component';
import { BoxComponent } from './shared/box/box.component';
import { TicketDetailComponent } from './tickets/ticket-detail/ticket-detail.component';
import { TicketItemComponent } from './tickets/ticket-list/ticket-item/ticket-item.component';
import { TicketListComponent } from './tickets/ticket-list/ticket-list.component';
import { TicketStartComponent } from './tickets/ticket-start/ticket-start.component';
import { TicketsComponent } from './tickets/tickets.component';

@NgModule({
  declarations: [
    AppComponent,
    TicketsComponent,
    TicketListComponent,
    TicketDetailComponent,
    NewTicketComponent,
    BoxComponent,
    BoxNumberComponent,
    TicketItemComponent,
    TicketStartComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
