// Your code here
class Polygon {
  constructor(intArr){
    this.sides = intArr
  }
  get countSides(){
    return this.sides.length
  }
  get perimeter(){
    return this.sides.reduce((total, num) => {return total + num})
  }
}

class Triangle extends Polygon {
  get isValid(){
    let [x, y, z] = this.sides
    return (x < y + z && y < x + z && z < x + y)? true : false
  }
}

class Square extends Polygon {
  get isValid(){
    let [a, b, c, d] = this.sides
    return (a === b && a === b && a === c && a === d)? true : false 
  }
  get area(){
    let a = this.sides[0]
    return a * a
  }
}