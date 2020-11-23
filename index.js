// Your code here

class Polygon{
    constructor(arr){
        this.arr = arr;
    }

    get countSides(){
        return this.arr.length;
    }
    
    get perimeter(){
        let count = 0;
        for(let i = 0; i < this.arr.length; i++){
            count += this.arr[i];
        }
        return count;
    }
}

class Triangle extends Polygon{
    get isValid(){
        this.arr.sort();
        for(let i = 0; i < this.arr.length - 2; i++){
            if(this.arr[i] + this.arr[i + 1] > this.arr[i + 2]){
                return true;
            } else{
                return false;
            }
        }
    }
}

class Square extends Polygon{
    get isValid(){
        for(let i = 0; i < this.arr.length; i++){
            if(this.arr[i] === this.arr[i + 1] && this.arr[i] === this.arr[i + 2] && this.arr[i] === this.arr[i + 3]){
                return true;
            } else{
                return false;
            }
        }
    }

    get area(){
        let area;
        for(let i = 0; i < this.arr.length; i++){
            area = this.arr[i] * this.arr[i];
        }
        return area;
    }
}