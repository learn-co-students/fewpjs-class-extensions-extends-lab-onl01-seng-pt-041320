// Your code here
class Polygon
{
    constructor(intArray)
    {
        this.sideLengthArray = intArray
    }

    get countSides()
    {
        return this.sideLengthArray.length;
    }

    get perimeter()
    {
        let sum = 0;

        for (let side of this.sideLengthArray)
        {
            sum += side;
        }

        return sum;
    }
}

class Triangle extends Polygon
{
    get isValid()
    {
        const [side1, side2, side3] = this.sideLengthArray;

        if ((side1 + side2 > side3) && (side1 + side3 > side2) && (side2 + side3 > side1))
        {
            return true;
        }
        
        return false;
    }
}

class Square extends Polygon
{
    get isValid()
    {
        const [side1, side2, side3, side4] = this.sideLengthArray;

        if (side1 === side2 && side2 === side3 && side3 === side4)
        {
            return true;
        }

        return false;
    }

    get area()
    {
        return this.isValid === true ? this.sideLengthArray[0] ** 2 : undefined
    }
}