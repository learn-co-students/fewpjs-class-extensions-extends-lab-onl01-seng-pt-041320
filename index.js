class Polygon {
  constructor(sides) {
    this.sides = sides
  }

  get countSides() {
    return this.sides.length
  }

  get perimeter() {
    return this.sides.reduce((acc, currVal) => acc + currVal)
  }

  get randomSide() {
    return this.sides[Math.floor(Math.random()*this.countSides)]
  }
}

class Triangle extends Polygon {
  get isValid() {
    let [side1, side2, side3] =  [this.sides[0], this.sides[1], this.sides[2]]
    return ((side1 + side2 > side3) && (side2 + side3 > side1) && (side3 + side1 > side2))
  }
}

class Square extends Polygon {
  get isValid() {
    let [side1, side2, side3, side4] =  [this.sides[0], this.sides[1], this.sides[2], this.sides[3]]
    return ((side1 === side2) && (side2 === side3) && (side3 === side4))
  }

  get area() {
    let side = this.randomSide
    return Math.pow(side, 2)
  }
}
