class Field {
  constructor(private field : boolean[][]){

  }

  isMined(x: number, y: number) : boolean {
    if (x < 0 || y < 0 || y >= this.field.length || x >= this.field[0].length) {
      return false;
    }
    return this.field[y][x];
  }

  computeForOneCell(x: number, y: number) : number {
    let result = 0;
    if (this.isMined(x-1, y)) result++;
    if (this.isMined(x-1, y+1)) result++;
    if (this.isMined(x-1, y-1)) result++;
    if (this.isMined(x, y+1)) result++;
    if (this.isMined(x, y-1)) result++;
    if (this.isMined(x+1, y)) result++;
    if (this.isMined(x+1, y+1)) result++;
    if (this.isMined(x+1, y-1)) result++;

    return result;
  }

  compute() : string {
    let result = "";
    const h = this.field.length;
    for (let i = 0; i < h; i++) {
      const w = this.field[i].length;
      for (let j = 0; j < w; j++) {
        if (this.isMined(j, i)) {
          result += "*";
        } else {
          result += this.computeForOneCell(j, i);
        }
      }
      result += "\n";
    }
    return result;
  }
}


export {
  Field
}
