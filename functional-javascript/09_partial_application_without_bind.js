'strict';

var slice = Array.prototype.slice

module.exports = function logger(namespace) {
    return function () {
        console.log.apply(null, [namespace].concat(slice.call(arguments)))
    }
}
