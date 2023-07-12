import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Ticket } from 'src/app/shared/models/ticket.model';
import { TicketListService } from 'src/app/shared/ticket-list.service';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.css'],
})
export class TicketListComponent implements OnInit, OnDestroy {
  ticketList: Ticket[] = [];
  subscription!: Subscription;

  constructor(
    private ticketService: TicketListService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.subscription = this.ticketService.ticketListChanged.subscribe(
      (tickets: Ticket[]) => {
        this.ticketList = tickets;
      }
    );
    this.ticketList = this.ticketService.getTicketList();
  }

  onNewTicket() {
    this.router.navigate(['new']);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
