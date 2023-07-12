import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { map, tap } from 'rxjs/operators';
import { Ticket } from './shared/models/ticket.model';
import { TicketListService } from './shared/ticket-list.service';

@Injectable({ providedIn: 'root' })
export class DataStorageService {
  url = 'https://localhost:5001/api/ticket';

  constructor(
    private httpClient: HttpClient,
    private ticketService: TicketListService,
    private toastr: ToastrService
  ) {}

  fetchTickets() {
    return this.httpClient.get<Ticket[]>(`${this.url}`).pipe(
      map((tickets) => {
        return tickets.map((ticket) => {
          return {
            ...ticket,
            boxes: ticket.boxes
              ? ticket.boxes.map((box) => {
                  return {
                    ...box,
                    boxNumbers: box.boxNumbers ? box.boxNumbers : [],
                  };
                })
              : [],
          };
        });
      }),
      tap((tickets) => {
        this.ticketService.setTicketList(tickets);
      })
    );
  }

  storeTickets() {
    const tickets = this.ticketService.getTicketList().filter((t) => !t.id);
    return this.httpClient.put(`${this.url}`, tickets);
  }
}
