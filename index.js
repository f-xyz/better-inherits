/**
 * Better util.inherits.
 * @param {function} constructor
 * @param {function} base base constructor.
 * @param {{}?} prototype constructor's prototype
 * @returns {function}
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
    return constructor;
}

module.exports = inherits;