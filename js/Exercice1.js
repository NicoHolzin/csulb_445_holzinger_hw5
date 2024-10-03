// Square Class
// Create a square class defined by the following
//  Property
// o side
//  Methods
// o perimeter (side times 4)
// o area (side squared)
// o diagonal (square root of 2 * side squared, √2∗s2)
// o describe – shows the squares information as follows (assume side is 2):
// Square with side 2 has perimeter of 8, area of 4, and diagonal of 2.828
// Your program is to create three squares and use the describe method to show each squares
// information

class Square {
  constructor(side) {
    this.side = side;
  }
  perimeter() {
    return (this.side*4);
  }
  area() {
    return (this.side**2);
  }
  diagonal(){
    return (Math.sqrt(2)*this.side).toFixed(3);
  }
  describe(){
    console.log(`Square with side ${this.side} has perimeter of ${this.perimeter()}, area of ${this.area()}, and diagonal of ${this.diagonal()}`)
  }
}

let side;
while (!Number.isInteger(side)) {
  side = Number.parseInt(prompt("Type the square side length"));
}
const square = new Square(side);
console.log(square.describe())