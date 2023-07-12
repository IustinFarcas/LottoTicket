import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Ticket } from 'src/app/shared/models/ticket.model';
import { TicketListService } from 'src/app/shared/ticket-list.service';

@Component({
  selector: 'app-ticket-detail',
  templateUrl: './ticket-detail.component.html',
  styleUrls: ['./ticket-detail.component.css'],
})
export class TicketDetailComponent implements OnInit {
  @Input() ticket!: Ticket;
  index!: number;
  isNew: boolean = false;

  constructor(
    private ticketService: TicketListService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    if (this.location.path().includes('/new')) {
      this.isNew = true;
    }
    if (!this.isNew) {
      this.route.params.subscribe((params: Params) => {
        this.index = +params['id'];
        this.ticket = this.ticketService.getTicket(this.index);
      });
    }
  }
}
