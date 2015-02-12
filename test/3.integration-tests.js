var should = require('chai').should();
var inherits = require('../index');
var Class = inherits.Class;

describe('Integration tests', function() {

    describe('inherits() tests', function() {

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
    });

    describe('inherits.Class tests', function() {

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
    });
    
    describe('prototype fields sharing', function() {
        var Mesh = new Class({
            points: [],
            constructor: function() {}
        });
        
        var mesh1 = new Mesh();
        var mesh2 = new Mesh();
        
        it('should share prototype properties', function() {
            mesh1.points.should.eq(mesh2.points);
        });
    });

});