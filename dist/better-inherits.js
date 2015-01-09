(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
 *     // named constructor is preferred
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
},{"./inherits":3}],2:[function(require,module,exports){
var inherits = require('./inherits');
inherits.Class = require('./class');

module.exports = inherits;
},{"./class":1,"./inherits":3}],3:[function(require,module,exports){
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
    constructor._super = base;
    constructor.prototype = Object.create(base.prototype, {
        constructor: {
            value: constructor,
            enumerable: false,
            writable: true,
            configurable: true
        },
        _super: {
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
},{}]},{},[2])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3Vzci9sb2NhbC9saWIvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsImNsYXNzLmpzIiwiaW5kZXguanMiLCJpbmhlcml0cy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pEQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsInZhciBpbmhlcml0cyA9IHJlcXVpcmUoJy4vaW5oZXJpdHMnKTtcblxuLyoqXG4gKiB2YXIgUG9pbnQgPSBuZXcgQ2xhc3Moe1xuICogICAgICAvLyBuYW1lZCBjb25zdHJ1Y3RvciBpcyBwcmVmZXJyZWRcbiAqICAgICBjb25zdHJ1Y3RvcjogZnVuY3Rpb24gUG9pbnQoeCwgeSkge1xuICogICAgICAgICB0aGlzLnggPSB4O1xuICogICAgICAgICB0aGlzLnkgPSB5O1xuICogICAgIH0sXG4gKiAgICAgbGVuZ3RoOiBmdW5jdGlvbigpIHtcbiAqICAgICAgICAgcmV0dXJuIE1hdGguc3FydCh0aGlzLnggKiB0aGlzLnggKyB0aGlzLnkgKiB0aGlzLnkpO1xuICogICAgIH1cbiAqIH0pO1xuICpcbiAqIHZhciBDaXJjbGUgPSBuZXcgQ2xhc3Moe1xuICogICAgIHByb3RvdHlwZTogUG9pbnQsXG4gKiAgICAgLy8gbmFtZWQgY29uc3RydWN0b3IgaXMgcHJlZmVycmVkXG4gKiAgICAgY29uc3RydWN0b3I6IGZ1bmN0aW9uIENpcmNsZSh4LCB5LCByYWRpdXMpIHtcbiAqICAgICAgICAgdGhpcy5fc3VwZXIoeCwgeSk7IC8vIFBvaW50LmNhbGwodGhpcywgeCwgeSk7XG4gKiAgICAgICAgIHRoaXMucmFkaXVzID0gcmFkaXVzO1xuICogICAgIH0sXG4gKiAgICAgYXJlYTogZnVuY3Rpb24oKSB7XG4gKiAgICAgICAgIHJldHVybiBNYXRoLlBJICogdGhpcy5yYWRpdXMgKiB0aGlzLnJhZGl1cztcbiAqICAgICB9XG4gKiB9KTtcbiAqXG4gKiB2YXIgY2lyY2xlID0gbmV3IENpcmNsZSgxLCAyLCAzKTtcbiAqIGNvbnNvbGUubG9nKGNpcmNsZSBpbnN0YW5jZW9mIFBvaW50KTsgLy8gdHJ1ZVxuICogY29uc29sZS5sb2coY2lyY2xlIGluc3RhbmNlb2YgQ2lyY2xlKTsgLy8gdHJ1ZVxuICogY29uc29sZS5sb2coY2lyY2xlLmxlbmd0aCgpKTsgLy8gMi4yMzYwNjc5Nzc0OTk3OVxuICogY29uc29sZS5sb2coY2lyY2xlLmFyZWEoKSk7IC8vIDI4LjI3NDMzMzg4MjMwODEzOFxuICpcbiAqIEBwYXJhbSB7e319IHByb3RvIGNvbnN0cnVjdG9yIGlzIHJlcXVpcmVkXG4gKiBAcmV0dXJucyB7ZnVuY3Rpb259XG4gKiBAY29uc3RydWN0b3JcbiAqL1xuZnVuY3Rpb24gQ2xhc3MocHJvdG8pIHtcblxuICAgIGlmIChwcm90by5jb25zdHJ1Y3RvciA9PT0gdW5kZWZpbmVkXG4gICAgfHwgIHByb3RvLmNvbnN0cnVjdG9yID09PSBPYmplY3QpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdjb25zdHJ1Y3RvciBpcyByZXF1aXJlZCEnKTtcbiAgICB9XG5cbiAgICB2YXIgY29uc3RydWN0b3IgPSBwcm90by5jb25zdHJ1Y3RvcjtcblxuICAgIGlmIChwcm90by5wcm90b3R5cGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICB2YXIgYmFzZSA9IHByb3RvLnByb3RvdHlwZTtcbiAgICAgICAgZGVsZXRlIHByb3RvLnByb3RvdHlwZTtcbiAgICAgICAgaW5oZXJpdHMoY29uc3RydWN0b3IsIGJhc2UsIHByb3RvKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdHJ1Y3Rvci5wcm90b3R5cGUgPSBwcm90bztcbiAgICAgICAgY29uc3RydWN0b3IucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gY29uc3RydWN0b3I7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbnN0cnVjdG9yO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENsYXNzOyIsInZhciBpbmhlcml0cyA9IHJlcXVpcmUoJy4vaW5oZXJpdHMnKTtcbmluaGVyaXRzLkNsYXNzID0gcmVxdWlyZSgnLi9jbGFzcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGluaGVyaXRzOyIsIi8qKlxuICogQmV0dGVyIHV0aWwuaW5oZXJpdHMuXG4gKlxuICogZnVuY3Rpb24gUG9pbnQoeCwgeSkge1xuICogICAgIHRoaXMueCA9IHg7XG4gKiAgICAgdGhpcy55ID0geTtcbiAqIH1cbiAqIFBvaW50LnByb3RvdHlwZSA9IHtcbiAqICAgICBsZW5ndGg6IGZ1bmN0aW9uICgpIHtcbiAqICAgICAgICAgcmV0dXJuIE1hdGguc3FydCh0aGlzLnggKiB0aGlzLnggKyB0aGlzLnkgKiB0aGlzLnkpO1xuICogICAgIH1cbiAqIH07XG4gKlxuICogZnVuY3Rpb24gQ2lyY2xlKHgsIHksIHJhZGl1cykge1xuICogICAgIHRoaXMuX3N1cGVyKHgsIHkpOyAvLyBQb2ludC5jYWxsKHRoaXMsIHgsIHkpO1xuICogICAgIHRoaXMucmFkaXVzID0gcmFkaXVzO1xuICogfVxuICogQ2lyY2xlLnByb3RvdHlwZSA9IGluaGVyaXRzKENpcmNsZSwgUG9pbnQsIHtcbiAqICAgICBhcmVhOiBmdW5jdGlvbiAoKSB7XG4gKiAgICAgICAgIHJldHVybiBNYXRoLlBJICogdGhpcy5yYWRpdXMgKiB0aGlzLnJhZGl1cztcbiAqICAgICB9XG4gKiB9KTtcbiAqXG4gKiB2YXIgY2lyY2xlID0gbmV3IENpcmNsZSgxLCAyLCAzKTtcbiAqIGNvbnNvbGUubG9nKGNpcmNsZSBpbnN0YW5jZW9mIFBvaW50KTsgLy8gdHJ1ZVxuICogY29uc29sZS5sb2coY2lyY2xlIGluc3RhbmNlb2YgQ2lyY2xlKTsgLy8gdHJ1ZVxuICogY29uc29sZS5sb2coY2lyY2xlLmxlbmd0aCgpKTsgLy8gMi4yMzYwNjc5Nzc0OTk3OVxuICogY29uc29sZS5sb2coY2lyY2xlLmFyZWEoKSk7IC8vIDI4LjI3NDMzMzg4MjMwODEzOFxuICpcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBiYXNlIGNvbnN0cnVjdG9yLlxuICogQHBhcmFtIHt7fT99IHByb3RvdHlwZSBleHRlbnNpb25cbiAqIEByZXR1cm5zIHt7fX0gY29uc3RydWN0b3IncyBuZXcgcHJvdG90eXBlXG4gKi9cbmZ1bmN0aW9uIGluaGVyaXRzKGNvbnN0cnVjdG9yLCBiYXNlLCBwcm90b3R5cGUpIHtcbiAgICBjb25zdHJ1Y3Rvci5fc3VwZXIgPSBiYXNlO1xuICAgIGNvbnN0cnVjdG9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoYmFzZS5wcm90b3R5cGUsIHtcbiAgICAgICAgY29uc3RydWN0b3I6IHtcbiAgICAgICAgICAgIHZhbHVlOiBjb25zdHJ1Y3RvcixcbiAgICAgICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgX3N1cGVyOiB7XG4gICAgICAgICAgICB2YWx1ZTogYmFzZSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIGlmIChwcm90b3R5cGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBPYmplY3Qua2V5cyhwcm90b3R5cGUpLmZvckVhY2goZnVuY3Rpb24oa2V5KSB7XG4gICAgICAgICAgICBjb25zdHJ1Y3Rvci5wcm90b3R5cGVba2V5XSA9IHByb3RvdHlwZVtrZXldO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGNvbnN0cnVjdG9yLnByb3RvdHlwZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbmhlcml0czsiXX0=
