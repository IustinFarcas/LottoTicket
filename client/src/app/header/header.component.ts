import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { DataStorageService } from '../dataStorage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  constructor(
    private dataStorageService: DataStorageService,
    private toastr: ToastrService
  ) {}

  onSaveData() {
    this.dataStorageService.storeTickets().subscribe({
      next: () =>
        this.toastr.success('Tickets have been successfully saved', '', {
          positionClass: 'toast-top-center',
        }),
      error: () =>
        this.toastr.error('Something went wrong', '', {
          positionClass: 'toast-top-center',
        }),
    });
  }

  onFetchData() {
    this.dataStorageService.fetchTickets().subscribe({
      next: () =>
        this.toastr.success('Tickets have been successfully fetched', '', {
          positionClass: 'toast-top-center',
        }),
      error: () =>
        this.toastr.error('Something went wrong', '', {
          positionClass: 'toast-top-center',
        }),
    });
  }
}
