class Polygon {

    constructor(array) {
        this.array = array
        this.sideOne = array[0];
        this.sideTwo = array[1];
        this.sideThree = array[2];
        this.sideFour = array[3];
    }

    get countSides() {
        if (this.sideFour) {
            return 4
        } else {
            return 3
        }
    }

    get perimeter() {
        if (this.countSides == 3) {
            return (this.sideOne + this.sideTwo + this.sideThree)
        } else {
            return (this.sideOne + this.sideTwo + this.sideThree + this.sideFour)
        }
    }
}

class Triangle extends Polygon {

    get isValid() {
        if (this.sideOne + this.sideTwo > this.sideThree && this.sideOne + this.sideThree > this.sideTwo && this.sideTwo + this.sideThree > this.sideOne) {
            return true
        } else {
            return false
        }
    }

}

class Square extends Polygon {
    get area() {
        return (this.sideOne * this.sideTwo)
    }

    get isValid() {
        if (this.array.every(num => num == this.array[0])) {
            return true
        } else {
            return false
        }
    }
}