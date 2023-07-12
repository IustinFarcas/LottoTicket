import { Injectable } from '@angular/core';
import { BoxNumber } from './models/box-number.model';
import { Box } from './models/box.model';
import { Ticket } from './models/ticket.model';
import { TicketListService } from './ticket-list.service';

@Injectable({ providedIn: 'root' })
export class NewTicketService {
  constructor(private ticketListService: TicketListService) {}

  addBoxes(ticket: Ticket, nrOfBoxes: number) {
    ticket.boxes = [];
    for (let index = 0; index < nrOfBoxes; index++) {
      ticket.boxes.push(this.getDefaultBox());
    }
    return ticket;
  }

  setSelectedNumbers(ticket: Ticket): Box[] {
    return ticket.boxes.map((box) => {
      const generatedNumbers: number[] = this.generateRandomNumbers();
      return {
        ...box,
        boxNumbers: box.boxNumbers.map((boxNumber) => {
          return {
            ...boxNumber,
            isChecked: generatedNumbers.includes(boxNumber.value),
          };
        }),
      };
    });
  }

  private generateRandomNumbers(): number[] {
    const generatedNumbers: number[] = [];
    const min = 1;
    const max = 49;
    for (let index = 1; index <= 6; index++) {
      generatedNumbers.push(Math.floor(Math.random() * (max - min + 1)) + min);
    }
    return generatedNumbers;
  }

  private getDefaultBox(): Box {
    const defaultBox = new Box(this.getDefaultNumbers());
    return defaultBox;
  }

  getDefaultNumbers() {
    const defaultNumbers: BoxNumber[] = [];
    for (let index = 1; index <= 49; index++) {
      defaultNumbers.push(new BoxNumber(index, false));
    }
    return defaultNumbers;
  }
}
