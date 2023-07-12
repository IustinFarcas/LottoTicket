import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Box } from '../shared/models/box.model';
import { Ticket } from '../shared/models/ticket.model';
import { NewTicketService } from '../shared/new-ticket.service';
import { TicketListService } from '../shared/ticket-list.service';

@Component({
  selector: 'app-new-ticket',
  templateUrl: './new-ticket.component.html',
  styleUrls: ['./new-ticket.component.css'],
})
export class NewTicketComponent {
  superzahl!: number;
  numberOfBoxes: number = 0;
  isDrawn: boolean = false;
  @Input() ticket: Ticket = new Ticket([new Box([])]);

  constructor(
    private newTicketService: NewTicketService,
    private tiketListService: TicketListService,
    private router: Router
  ) {}

  onNrOfBoxesValueChanged(e: any) {
    this.newTicketService.addBoxes(this.ticket, e.target.value);
  }
  onSuperzahlValueChanged(e: any) {
    this.ticket.superzahl = e.target.value;
  }
  onDrawTicketClicked() {
    this.ticket.boxes = this.newTicketService.setSelectedNumbers(this.ticket);
    this.isDrawn = true;
  }
  onAddToTicketsList() {
    this.tiketListService.addTicket(this.ticket);
    this.router.navigate(['tickets']);
  }

  onBackClicked() {
    this.router.navigate(['tickets']);
  }
}
