import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ticket } from './models/ticket.model';

@Injectable({ providedIn: 'root' })
export class TicketListService {
  ticketListChanged = new Subject<Ticket[]>();
  ticketList: Ticket[] = [];

  setTicketList(ticketList: Ticket[]) {
    this.ticketList = ticketList;
    this.ticketListChanged.next(this.ticketList.slice());
  }

  getTicketList() {
    return this.ticketList.slice();
  }

  getTicket(index: number) {
    return this.ticketList[index];
  }

  addTicket(ticket: Ticket) {
    this.ticketList.push(ticket);
  }

  deleteTicket(index: number) {
    this.ticketList.splice(index, 1);
    this.ticketListChanged.next(this.ticketList.slice());
  }
}
