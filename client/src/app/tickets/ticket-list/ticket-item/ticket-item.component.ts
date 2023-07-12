import { Component, Input, OnInit } from '@angular/core';
import { Ticket } from 'src/app/shared/models/ticket.model';

@Component({
  selector: 'app-ticket-item',
  templateUrl: './ticket-item.component.html',
  styleUrls: ['./ticket-item.component.css'],
})
export class TicketItemComponent implements OnInit {
  @Input() ticket!: Ticket;
  @Input() index!: number;

  ngOnInit(): void {}
}
