export class BoxNumber {
  public id?: number;
  public value: number;
  public isChecked: boolean;

  constructor(value: number, isChecked: boolean, id?: number) {
    this.id = id;
    this.value = value;
    this.isChecked = isChecked;
  }
}
