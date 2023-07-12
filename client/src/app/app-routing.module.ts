import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewTicketComponent } from './new-ticket/new-ticket.component';
import { TicketDetailComponent } from './tickets/ticket-detail/ticket-detail.component';
import { TicketsResolverService } from './tickets/ticket-resolver.service';
import { TicketsComponent } from './tickets/tickets.component';

const routes: Routes = [
  { path: '', redirectTo: '/tickets', pathMatch: 'full' },
  {
    path: 'tickets',
    component: TicketsComponent,
    children: [
      {
        path: ':id',
        component: TicketDetailComponent,
        resolve: [TicketsResolverService],
      },
    ],
  },
  { path: 'new', component: NewTicketComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
