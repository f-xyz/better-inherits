# Deprecated #

Please use the *class* keyword with:
* https://babeljs.io/
* http://coffeescript.org/
* http://www.typescriptlang.org/
* etc.

-----------------------------

Improved util.inherits() and Klass pattern
--------------------------------

`npm install better-inherits`

How to use inherits()
--------------------------

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

    function Circle(x, y, r) {
        this._base(x, y); // Point.call(this, x, y);
        this.r = r;
    }
    /*Circle.prototype = */inherits(Circle, Point, {
        area: function () {
            return Math.PI * this.r * this.r;
        }
    });

    var circle;

    it('instance creation',function() {
        circle = new Circle(1, 2, 3);
        circle.x.should.equal(1);
        circle.y.should.equal(2);
        circle.r.should.equal(3);
    });

    it('instance of Point', function() {
        circle.should.instanceOf(Point);
    });

    it('instance of Circle', function() {
        circle.should.instanceOf(Circle);
    });

    it('own method', function() {
        circle.area().should.equal(28.274333882308138);
    });

    it('inherited method', function() {
        circle.length().should.equal(2.23606797749979);
    });
```

Klass pattern
--------------------------------

```javascript

var Class = require('better-inherits').Class;

var Point = new Class({
    constructor: function(x, y) {
        this.x = x;
        this.y = y;
    },
    length: function() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }
});

var Circle = new Class({
    prototype: Point,
    constructor: function(x, y, r) {
        this._base(x, y); // Point.call(this, x, y);
        this.r = r;
    },
    area: function() {
        return Math.PI * this.r * this.r;
    }
});

var circle;

it('instance creation',function() {
    circle = new Circle(1, 2, 3);
    circle.x.should.equal(1);
    circle.y.should.equal(2);
    circle.r.should.equal(3);
});

it('instance of Point', function() {
    circle.should.instanceOf(Point);
});

it('instance of Circle', function() {
    circle.should.instanceOf(Circle);
});

it('own method', function() {
    circle.area().should.equal(28.274333882308138);
});

it('inherited method', function() {
    circle.length().should.equal(2.23606797749979);
});
```
How to build and test
----------------
```
npm install
gulp build
gulp test
```
