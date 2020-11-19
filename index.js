class Polygon {
    constructor(array) {
        this.array = array;
    }

    get countSides() {
      return this.array.length;
    }

    get perimeter() {
        return this.array.reduce((accumulator, currentValue) => {
            return accumulator + currentValue;
        })
        }
}

class Triangle extends Polygon {

    get isValid() {
        if (this.countSides === 3) {
            let [a, b, c] = this.array;
            if (a+b>c && a+c>b && b+c>a) {
                return true;
            } else {
                return false;
            }
            } else {
                return false;
            }
        }
}

class Square extends Polygon {
    get isValid() {
        if (this.countSides === 4) {
            let [a, b, c, d] = this.array;
            if ((a === b) && (a === c) && (a === d)) {
                return true;
            } else {
                return false;
            } 
            } else {
                return false;
            }
        }

    get area() {
        if (this.isValid) {
            let a = this.array[0];
            return a * a;
        }
    }
}

