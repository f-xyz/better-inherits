!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var f;"undefined"!=typeof window?f=window:"undefined"!=typeof global?f=global:"undefined"!=typeof self&&(f=self),f.betterInherits=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var inherits = require('./inherits');
inherits.Class = require('./class');

module.exports = inherits;
},{"./class":2,"./inherits":3}],2:[function(require,module,exports){
var inherits = require('./inherits');

/**
 * var Point = new Class({
 *     // named constructor is preferred
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
 * @param {{ constructor: function }} proto prototype with constructor
 * @returns {function|Object}
 * @constructor
 */
function Class(proto) {
    if (proto) {

        var constructor = proto.constructor;

        if (proto.prototype !== undefined) {
            var base = proto.prototype;
            delete proto.prototype;
            inherits(constructor, base, proto);
        } else {
            constructor.prototype = proto;
        }

        return constructor;

    } else {
        return Object;
    }
}

module.exports = Class;
},{"./inherits":3}],3:[function(require,module,exports){
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
},{}]},{},[1])(1)
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJpbmRleC5qcyIsImNsYXNzLmpzIiwiaW5oZXJpdHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsInZhciBpbmhlcml0cyA9IHJlcXVpcmUoJy4vaW5oZXJpdHMnKTtcbmluaGVyaXRzLkNsYXNzID0gcmVxdWlyZSgnLi9jbGFzcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGluaGVyaXRzOyIsInZhciBpbmhlcml0cyA9IHJlcXVpcmUoJy4vaW5oZXJpdHMnKTtcblxuLyoqXG4gKiB2YXIgUG9pbnQgPSBuZXcgQ2xhc3Moe1xuICogICAgIC8vIG5hbWVkIGNvbnN0cnVjdG9yIGlzIHByZWZlcnJlZFxuICogICAgIGNvbnN0cnVjdG9yOiBmdW5jdGlvbiBQb2ludCh4LCB5KSB7XG4gKiAgICAgICAgIHRoaXMueCA9IHg7XG4gKiAgICAgICAgIHRoaXMueSA9IHk7XG4gKiAgICAgfSxcbiAqICAgICBsZW5ndGg6IGZ1bmN0aW9uKCkge1xuICogICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KHRoaXMueCAqIHRoaXMueCArIHRoaXMueSAqIHRoaXMueSk7XG4gKiAgICAgfVxuICogfSk7XG4gKlxuICogdmFyIENpcmNsZSA9IG5ldyBDbGFzcyh7XG4gKiAgICAgcHJvdG90eXBlOiBQb2ludCxcbiAqICAgICBjb25zdHJ1Y3RvcjogZnVuY3Rpb24gQ2lyY2xlKHgsIHksIHJhZGl1cykge1xuICogICAgICAgICB0aGlzLl9zdXBlcih4LCB5KTsgLy8gUG9pbnQuY2FsbCh0aGlzLCB4LCB5KTtcbiAqICAgICAgICAgdGhpcy5yYWRpdXMgPSByYWRpdXM7XG4gKiAgICAgfSxcbiAqICAgICBhcmVhOiBmdW5jdGlvbigpIHtcbiAqICAgICAgICAgcmV0dXJuIE1hdGguUEkgKiB0aGlzLnJhZGl1cyAqIHRoaXMucmFkaXVzO1xuICogICAgIH1cbiAqIH0pO1xuICpcbiAqIHZhciBjaXJjbGUgPSBuZXcgQ2lyY2xlKDEsIDIsIDMpO1xuICogY29uc29sZS5sb2coY2lyY2xlIGluc3RhbmNlb2YgUG9pbnQpOyAvLyB0cnVlXG4gKiBjb25zb2xlLmxvZyhjaXJjbGUgaW5zdGFuY2VvZiBDaXJjbGUpOyAvLyB0cnVlXG4gKiBjb25zb2xlLmxvZyhjaXJjbGUubGVuZ3RoKCkpOyAvLyAyLjIzNjA2Nzk3NzQ5OTc5XG4gKiBjb25zb2xlLmxvZyhjaXJjbGUuYXJlYSgpKTsgLy8gMjguMjc0MzMzODgyMzA4MTM4XG4gKlxuICogQHBhcmFtIHt7IGNvbnN0cnVjdG9yOiBmdW5jdGlvbiB9fSBwcm90byBwcm90b3R5cGUgd2l0aCBjb25zdHJ1Y3RvclxuICogQHJldHVybnMge2Z1bmN0aW9ufE9iamVjdH1cbiAqIEBjb25zdHJ1Y3RvclxuICovXG5mdW5jdGlvbiBDbGFzcyhwcm90bykge1xuICAgIGlmIChwcm90bykge1xuXG4gICAgICAgIHZhciBjb25zdHJ1Y3RvciA9IHByb3RvLmNvbnN0cnVjdG9yO1xuXG4gICAgICAgIGlmIChwcm90by5wcm90b3R5cGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdmFyIGJhc2UgPSBwcm90by5wcm90b3R5cGU7XG4gICAgICAgICAgICBkZWxldGUgcHJvdG8ucHJvdG90eXBlO1xuICAgICAgICAgICAgaW5oZXJpdHMoY29uc3RydWN0b3IsIGJhc2UsIHByb3RvKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0cnVjdG9yLnByb3RvdHlwZSA9IHByb3RvO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNvbnN0cnVjdG9yO1xuXG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdDtcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ2xhc3M7IiwiLyoqXG4gKiBCZXR0ZXIgdXRpbC5pbmhlcml0cy5cbiAqXG4gKiBmdW5jdGlvbiBQb2ludCh4LCB5KSB7XG4gKiAgICAgdGhpcy54ID0geDtcbiAqICAgICB0aGlzLnkgPSB5O1xuICogfVxuICogUG9pbnQucHJvdG90eXBlID0ge1xuICogICAgIGxlbmd0aDogZnVuY3Rpb24gKCkge1xuICogICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KHRoaXMueCAqIHRoaXMueCArIHRoaXMueSAqIHRoaXMueSk7XG4gKiAgICAgfVxuICogfTtcbiAqXG4gKiBmdW5jdGlvbiBDaXJjbGUoeCwgeSwgcmFkaXVzKSB7XG4gKiAgICAgdGhpcy5fc3VwZXIoeCwgeSk7IC8vIFBvaW50LmNhbGwodGhpcywgeCwgeSk7XG4gKiAgICAgdGhpcy5yYWRpdXMgPSByYWRpdXM7XG4gKiB9XG4gKiBDaXJjbGUucHJvdG90eXBlID0gaW5oZXJpdHMoQ2lyY2xlLCBQb2ludCwge1xuICogICAgIGFyZWE6IGZ1bmN0aW9uICgpIHtcbiAqICAgICAgICAgcmV0dXJuIE1hdGguUEkgKiB0aGlzLnJhZGl1cyAqIHRoaXMucmFkaXVzO1xuICogICAgIH1cbiAqIH0pO1xuICpcbiAqIHZhciBjaXJjbGUgPSBuZXcgQ2lyY2xlKDEsIDIsIDMpO1xuICogY29uc29sZS5sb2coY2lyY2xlIGluc3RhbmNlb2YgUG9pbnQpOyAvLyB0cnVlXG4gKiBjb25zb2xlLmxvZyhjaXJjbGUgaW5zdGFuY2VvZiBDaXJjbGUpOyAvLyB0cnVlXG4gKiBjb25zb2xlLmxvZyhjaXJjbGUubGVuZ3RoKCkpOyAvLyAyLjIzNjA2Nzk3NzQ5OTc5XG4gKiBjb25zb2xlLmxvZyhjaXJjbGUuYXJlYSgpKTsgLy8gMjguMjc0MzMzODgyMzA4MTM4XG4gKlxuICogQHBhcmFtIHtmdW5jdGlvbn0gY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGJhc2UgY29uc3RydWN0b3IuXG4gKiBAcGFyYW0ge3t9P30gcHJvdG90eXBlIGV4dGVuc2lvblxuICogQHJldHVybnMge3t9fSBjb25zdHJ1Y3RvcidzIG5ldyBwcm90b3R5cGVcbiAqL1xuZnVuY3Rpb24gaW5oZXJpdHMoY29uc3RydWN0b3IsIGJhc2UsIHByb3RvdHlwZSkge1xuICAgIGNvbnN0cnVjdG9yLl9iYXNlID0gYmFzZTtcbiAgICBjb25zdHJ1Y3Rvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKGJhc2UucHJvdG90eXBlLCB7XG4gICAgICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICAgICAgICB2YWx1ZTogY29uc3RydWN0b3IsXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIF9iYXNlOiB7XG4gICAgICAgICAgICB2YWx1ZTogYmFzZSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIGlmIChwcm90b3R5cGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBPYmplY3Qua2V5cyhwcm90b3R5cGUpLmZvckVhY2goZnVuY3Rpb24oa2V5KSB7XG4gICAgICAgICAgICBjb25zdHJ1Y3Rvci5wcm90b3R5cGVba2V5XSA9IHByb3RvdHlwZVtrZXldO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGNvbnN0cnVjdG9yLnByb3RvdHlwZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbmhlcml0czsiXX0=
