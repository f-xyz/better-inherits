var inherits = require('./inherits');

/**
 * var Point = new Class({
 *      // named constructor is preferred
 *     constructor: function Point(x, y) {
 *         this.x = x;
 *         this.y = y;
 *     },
 *     length: function() {
 *         return Math.sqrt(this.x * this.x + this.y * this.y);
 *     }
 * });
 *
 * var Circle = new Class({
 *     prototype: Point,
 *     constructor: function Circle(x, y, radius) {
 *         this._super(x, y); // Point.call(this, x, y);
 *         this.radius = radius;
 *     },
 *     area: function() {
 *         return Math.PI * this.radius * this.radius;
 *     }
 * });
 *
 * var circle = new Circle(1, 2, 3);
 * console.log(circle instanceof Point); // true
 * console.log(circle instanceof Circle); // true
 * console.log(circle.length()); // 2.23606797749979
 * console.log(circle.area()); // 28.274333882308138
 *
 * @param {{}} proto constructor is required
 * @returns {function}
 * @constructor
 */
function Class(proto) {

    if (proto.constructor === undefined
    ||  proto.constructor === Object) {
        throw new Error('constructor is required!');
    }

    var constructor = proto.constructor;

    if (proto.prototype !== undefined) {
        var base = proto.prototype;
        delete proto.prototype;
        inherits(constructor, base, proto);
    } else {
        constructor.prototype = proto;
        constructor.prototype.constructor = constructor;
    }

    return constructor;
}

module.exports = Class;