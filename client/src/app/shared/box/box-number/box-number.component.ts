import { Component, Input } from '@angular/core';
import { BoxNumber } from '../../models/box-number.model';

@Component({
  selector: 'app-box-number',
  templateUrl: './box-number.component.html',
  styleUrls: ['./box-number.component.css'],
})
export class BoxNumberComponent {
  @Input() boxNumber!: BoxNumber;
}
