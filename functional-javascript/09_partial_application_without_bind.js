'strict';

var slice = Array.prototype.slice

module.exports = function logger(namespace) {
    return function () {
        var args = slice.call(arguments)
        args.unshift(namespace)
        console.log.apply(null, args)
    }
}
