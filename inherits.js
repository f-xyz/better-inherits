/**
 * Better util.inherits.
 *
 * function Point(x, y) {
 *     this.x = x;
 *     this.y = y;
 * }
 * Point.prototype = {
 *     length: function () {
 *         return Math.sqrt(this.x * this.x + this.y * this.y);
 *     }
 * };
 *
 * function Circle(x, y, radius) {
 *     this._super(x, y); // Point.call(this, x, y);
 *     this.radius = radius;
 * }
 * Circle.prototype = inherits(Circle, Point, {
 *     area: function () {
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
 * @param {function} constructor
 * @param {function} base constructor.
 * @param {{}?} prototype extension
 * @returns {{}} constructor's new prototype
 */
function inherits(constructor, base, prototype) {
    constructor._base = base;
    constructor.prototype = Object.create(base.prototype, {
        constructor: {
            value: constructor,
            enumerable: false,
            writable: true,
            configurable: true
        },
        _base: {
            value: base,
            enumerable: false,
            writable: true,
            configurable: true
        }
    });
    if (prototype !== undefined) {
        Object.keys(prototype).forEach(function(key) {
            constructor.prototype[key] = prototype[key];
        });
    }
    return constructor.prototype;
}

module.exports = inherits;