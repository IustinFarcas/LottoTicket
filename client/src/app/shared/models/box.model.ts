import { BoxNumber } from './box-number.model';

export class Box {
  public id?: number;
  public boxNumbers: BoxNumber[];

  constructor(boxNumbers: BoxNumber[], id?: number) {
    this.id = id;
    this.boxNumbers = boxNumbers;
  }
}
