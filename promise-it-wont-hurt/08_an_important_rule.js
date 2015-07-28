'use strict';

var q = require('q');

function throwMyGod() {
    throw new Error('OH NOES');
}

function iterate(argument) {
    console.log(argument);
    return argument + 1;
}

var count = 1;

q.fcall(iterate, count)
    .then(iterate, count)
    .then(iterate, count)
    .then(iterate, count)
    .then(iterate, count)
    .then(throwMyGod)
    .then(iterate, count)
    .then(iterate, count)
    .then(iterate, count)
    .then(iterate, count)
    .then(iterate, count)
    .then(null, console.log.bind(console));
