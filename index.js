// Your code here
class Polygon{
    constructor(arr){
        this.sides = arr;
    }

    get countSides() {
        return this.sides.length;
    }

    get perimeter() {
        return this.sides.reduce((total, num) => {return total + num});
    }
}

class Triangle extends Polygon {
    get hasThreeSides() {
      return  this.sides.length === 3? true : false; 
    }
    
    get isValid() {
        if (this.hasThreeSides) {
            let [a, b, c] = this.sides;
            if (a<b+c && b<a+c && c<a+b) {
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
    //let [a, b , c, d] = this.sides;

    get hasFourSides(){
        return this.countSides===4? true : false;
    }

    
    get area(){
        let a = this.sides[0]
        return a * a;
    }

    get isValid() {
        let[a, b, c, d] = this.sides;
        if (a===b && a===c && a===d && b===c && b===d && c===d) {
            return true;
        }
        return false;
    }



}