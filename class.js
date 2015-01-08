var inherits = require('./index');

/**
 * var Point = new Class({
 *     constructor Point: function(x, y) {
 *         this.x = x;
 *         this.y = y;
 *     },
 *     length: function() {
 *         Math.sqrt(this.x * this.x + this.y * this.y)
 *     }
 * });
 *
 * var Circle = new Class({
 *     prototype: Point,
 *     constructor: function(x, y, radius) {
 *         this._super(x, y)
 *         this.radius = radius
 *     },
 *     area: function() {
 *         return Math.PI * this.radius * this.radius
 *     }
 * });
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