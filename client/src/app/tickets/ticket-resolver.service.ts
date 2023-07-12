import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { DataStorageService } from '../dataStorage.service';
import { Ticket } from '../shared/models/ticket.model';
import { TicketListService } from '../shared/ticket-list.service';

@Injectable({ providedIn: 'root' })
export class TicketsResolverService implements Resolve<Ticket[]> {
  constructor(
    private dataStorageService: DataStorageService,
    private ticketsService: TicketListService
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Ticket[] | Observable<Ticket[]> | Promise<Ticket[]> {
    const recipes = this.ticketsService.getTicketList();
    if (recipes.length === 0) {
      return this.dataStorageService.fetchTickets();
    } else {
      return recipes;
    }
  }
}
