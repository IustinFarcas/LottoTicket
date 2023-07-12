import { Component, Input } from '@angular/core';
import { Box } from '../models/box.model';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css'],
})
export class BoxComponent {
  @Input() box!: Box;
}
