var inherits = require('./index');

/**
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