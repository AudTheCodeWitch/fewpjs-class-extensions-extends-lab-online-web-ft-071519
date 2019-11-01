// Polygon
class Polygon {
    constructor(array) {
        this.sides = array
    }

    get countSides() {
        return this.sides.length
    }

    get perimeter() {
        let p = 0;
        for (const side of this.sides) {
            p += side
        }
        return p
    }
}

// Triangle
class Triangle extends Polygon {
    // checks for valid triangle
    get isValid() {
        if (this.countSides === 3) {
            const a = this.sides[0];
            const b = this.sides[1];
            const c = this.sides [2];
            return !((a + b <= c) || (b + c <= a) || (a + c <= b));
        }
        return false
    }

}

// Square
class Square extends Polygon {
    // calculates the area
    get area() {
        return this.sides[0] ** 2
    }

    // checks for valid square
    get isValid() {
        if (this.countSides === 4) {
            const a = this.sides[0];
            const b = this.sides[1];
            const c = this.sides [2];
            const d = this.sides [3];
            return (a === b) && (b === c) && (c === d);
        }
        return false
    }
}
