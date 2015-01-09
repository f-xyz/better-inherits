Slightly improved util.inherits().
--------------------------------

~~`npm install better-inherits`~~


```javascript
var inherits = require('better-inherits');

function Point(x, y) {
    this.x = x;
    this.y = y;
}
Point.prototype = {
    length: function () {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }
};

function Circle(x, y, radius) {
    this._super(x, y);
    this.radius = radius;
}
inherits(Circle, Point, {
    area: function () {
        return Math.PI * this.radius * this.radius;
    }
});

// or using fancy syntax
var Class = require('better-inherits/class');

var Point = new Class({
     // named constructor is preferred
    constructor: function Point(x, y) {
        this.x = x;
        this.y = y;
    },
    length: function() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }
});

var Circle = new Class({
    prototype: Point, // inherits(Circle, Point, {...})
    constructor: function Circle(x, y, radius) {
        this._super(x, y); // Point.call(this, x, y);
        this.radius = radius;
    },
    area: function() {
        return Math.PI * this.radius * this.radius;
    }
});

var circle = new Circle(1, 2, 3);
console.log(circle instanceof Point === true);
console.log(circle instanceof Circle === true);
console.log(circle.length() === 2.23606797749979);
console.log(circle.area() === 28.274333882308138);
```