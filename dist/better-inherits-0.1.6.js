!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var f;"undefined"!=typeof window?f=window:"undefined"!=typeof global?f=global:"undefined"!=typeof self&&(f=self),f.inherits=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlc1xcYnJvd3NlcmlmeVxcbm9kZV9tb2R1bGVzXFxicm93c2VyLXBhY2tcXF9wcmVsdWRlLmpzIiwiaW5kZXguanMiLCJjbGFzcy5qcyIsImluaGVyaXRzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJ2YXIgaW5oZXJpdHMgPSByZXF1aXJlKCcuL2luaGVyaXRzJyk7XG5pbmhlcml0cy5DbGFzcyA9IHJlcXVpcmUoJy4vY2xhc3MnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBpbmhlcml0czsiLCJ2YXIgaW5oZXJpdHMgPSByZXF1aXJlKCcuL2luaGVyaXRzJyk7XG5cbi8qKlxuICogdmFyIFBvaW50ID0gbmV3IENsYXNzKHtcbiAqICAgICAvLyBuYW1lZCBjb25zdHJ1Y3RvciBpcyBwcmVmZXJyZWRcbiAqICAgICBjb25zdHJ1Y3RvcjogZnVuY3Rpb24gUG9pbnQoeCwgeSkge1xuICogICAgICAgICB0aGlzLnggPSB4O1xuICogICAgICAgICB0aGlzLnkgPSB5O1xuICogICAgIH0sXG4gKiAgICAgbGVuZ3RoOiBmdW5jdGlvbigpIHtcbiAqICAgICAgICAgcmV0dXJuIE1hdGguc3FydCh0aGlzLnggKiB0aGlzLnggKyB0aGlzLnkgKiB0aGlzLnkpO1xuICogICAgIH1cbiAqIH0pO1xuICpcbiAqIHZhciBDaXJjbGUgPSBuZXcgQ2xhc3Moe1xuICogICAgIHByb3RvdHlwZTogUG9pbnQsXG4gKiAgICAgY29uc3RydWN0b3I6IGZ1bmN0aW9uIENpcmNsZSh4LCB5LCByYWRpdXMpIHtcbiAqICAgICAgICAgdGhpcy5fc3VwZXIoeCwgeSk7IC8vIFBvaW50LmNhbGwodGhpcywgeCwgeSk7XG4gKiAgICAgICAgIHRoaXMucmFkaXVzID0gcmFkaXVzO1xuICogICAgIH0sXG4gKiAgICAgYXJlYTogZnVuY3Rpb24oKSB7XG4gKiAgICAgICAgIHJldHVybiBNYXRoLlBJICogdGhpcy5yYWRpdXMgKiB0aGlzLnJhZGl1cztcbiAqICAgICB9XG4gKiB9KTtcbiAqXG4gKiB2YXIgY2lyY2xlID0gbmV3IENpcmNsZSgxLCAyLCAzKTtcbiAqIGNvbnNvbGUubG9nKGNpcmNsZSBpbnN0YW5jZW9mIFBvaW50KTsgLy8gdHJ1ZVxuICogY29uc29sZS5sb2coY2lyY2xlIGluc3RhbmNlb2YgQ2lyY2xlKTsgLy8gdHJ1ZVxuICogY29uc29sZS5sb2coY2lyY2xlLmxlbmd0aCgpKTsgLy8gMi4yMzYwNjc5Nzc0OTk3OVxuICogY29uc29sZS5sb2coY2lyY2xlLmFyZWEoKSk7IC8vIDI4LjI3NDMzMzg4MjMwODEzOFxuICpcbiAqIEBwYXJhbSB7eyBjb25zdHJ1Y3RvcjogZnVuY3Rpb24gfX0gcHJvdG8gcHJvdG90eXBlIHdpdGggY29uc3RydWN0b3JcbiAqIEByZXR1cm5zIHtmdW5jdGlvbnxPYmplY3R9XG4gKiBAY29uc3RydWN0b3JcbiAqL1xuZnVuY3Rpb24gQ2xhc3MocHJvdG8pIHtcbiAgICBpZiAocHJvdG8pIHtcblxuICAgICAgICB2YXIgY29uc3RydWN0b3IgPSBwcm90by5jb25zdHJ1Y3RvcjtcblxuICAgICAgICBpZiAocHJvdG8ucHJvdG90eXBlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHZhciBiYXNlID0gcHJvdG8ucHJvdG90eXBlO1xuICAgICAgICAgICAgZGVsZXRlIHByb3RvLnByb3RvdHlwZTtcbiAgICAgICAgICAgIGluaGVyaXRzKGNvbnN0cnVjdG9yLCBiYXNlLCBwcm90byk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdHJ1Y3Rvci5wcm90b3R5cGUgPSBwcm90bztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjb25zdHJ1Y3RvcjtcblxuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBPYmplY3Q7XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENsYXNzOyIsIi8qKlxuICogQmV0dGVyIHV0aWwuaW5oZXJpdHMuXG4gKlxuICogZnVuY3Rpb24gUG9pbnQoeCwgeSkge1xuICogICAgIHRoaXMueCA9IHg7XG4gKiAgICAgdGhpcy55ID0geTtcbiAqIH1cbiAqIFBvaW50LnByb3RvdHlwZSA9IHtcbiAqICAgICBsZW5ndGg6IGZ1bmN0aW9uICgpIHtcbiAqICAgICAgICAgcmV0dXJuIE1hdGguc3FydCh0aGlzLnggKiB0aGlzLnggKyB0aGlzLnkgKiB0aGlzLnkpO1xuICogICAgIH1cbiAqIH07XG4gKlxuICogZnVuY3Rpb24gQ2lyY2xlKHgsIHksIHJhZGl1cykge1xuICogICAgIHRoaXMuX3N1cGVyKHgsIHkpOyAvLyBQb2ludC5jYWxsKHRoaXMsIHgsIHkpO1xuICogICAgIHRoaXMucmFkaXVzID0gcmFkaXVzO1xuICogfVxuICogQ2lyY2xlLnByb3RvdHlwZSA9IGluaGVyaXRzKENpcmNsZSwgUG9pbnQsIHtcbiAqICAgICBhcmVhOiBmdW5jdGlvbiAoKSB7XG4gKiAgICAgICAgIHJldHVybiBNYXRoLlBJICogdGhpcy5yYWRpdXMgKiB0aGlzLnJhZGl1cztcbiAqICAgICB9XG4gKiB9KTtcbiAqXG4gKiB2YXIgY2lyY2xlID0gbmV3IENpcmNsZSgxLCAyLCAzKTtcbiAqIGNvbnNvbGUubG9nKGNpcmNsZSBpbnN0YW5jZW9mIFBvaW50KTsgLy8gdHJ1ZVxuICogY29uc29sZS5sb2coY2lyY2xlIGluc3RhbmNlb2YgQ2lyY2xlKTsgLy8gdHJ1ZVxuICogY29uc29sZS5sb2coY2lyY2xlLmxlbmd0aCgpKTsgLy8gMi4yMzYwNjc5Nzc0OTk3OVxuICogY29uc29sZS5sb2coY2lyY2xlLmFyZWEoKSk7IC8vIDI4LjI3NDMzMzg4MjMwODEzOFxuICpcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBiYXNlIGNvbnN0cnVjdG9yLlxuICogQHBhcmFtIHt7fT99IHByb3RvdHlwZSBleHRlbnNpb25cbiAqIEByZXR1cm5zIHt7fX0gY29uc3RydWN0b3IncyBuZXcgcHJvdG90eXBlXG4gKi9cbmZ1bmN0aW9uIGluaGVyaXRzKGNvbnN0cnVjdG9yLCBiYXNlLCBwcm90b3R5cGUpIHtcbiAgICBjb25zdHJ1Y3Rvci5fYmFzZSA9IGJhc2U7XG4gICAgY29uc3RydWN0b3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShiYXNlLnByb3RvdHlwZSwge1xuICAgICAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgICAgICAgdmFsdWU6IGNvbnN0cnVjdG9yLFxuICAgICAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBfYmFzZToge1xuICAgICAgICAgICAgdmFsdWU6IGJhc2UsXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBpZiAocHJvdG90eXBlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgT2JqZWN0LmtleXMocHJvdG90eXBlKS5mb3JFYWNoKGZ1bmN0aW9uKGtleSkge1xuICAgICAgICAgICAgY29uc3RydWN0b3IucHJvdG90eXBlW2tleV0gPSBwcm90b3R5cGVba2V5XTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBjb25zdHJ1Y3Rvci5wcm90b3R5cGU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5oZXJpdHM7Il19
