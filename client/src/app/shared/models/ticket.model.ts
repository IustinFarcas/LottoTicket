import { Box } from './box.model';

export class Ticket {
  public id?: number;
  public name: string;
  public superzahl?: number;
  public boxes: Box[];

  constructor(boxes: Box[], id?: number, superzahl?: number, name?: string) {
    this.id = id;
    this.name = name ? name : Date.now().toString();
    this.superzahl = superzahl;
    this.boxes = boxes;
  }
}
