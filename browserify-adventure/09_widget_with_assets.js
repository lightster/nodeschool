'use strict';

var fs = require('fs');
var domify = require('domify');
var insertCss = require('insert-css');
var events = require('events');

var html = fs.readFileSync('./09_form.html', 'utf8');
var css = fs.readFileSync('./09_stylin.css', 'utf8');

console.log(html, css);

var genericWidget = {
  init: function init() {
    this.element = null;
    this.eventEmitter = null;
  },

  appendTo: function appendTo(target) {
    target.appendChild(this.getElement());
  },

  getElement: function getElement() {
    if (this.element) {
      return this.element;
    }

    var widget = this;
    var element = domify(html);

    element.addEventListener('submit', function onSubmit(ev) {
      widget.emit('message', element.querySelector('textarea').value);
      ev.preventDefault();
    });

    insertCss(css);
    this.element = element;

    return this.element;
  },

  getEventEmitter: function getEventEmitter() {
    if (this.eventEmitter) {
      return this.eventEmitter;
    }

    this.eventEmitter = new events.EventEmitter();

    return this.eventEmitter;
  },

  on: function on(event, listener) {
    return this.getEventEmitter().on(event, listener);
  },

  emit: function emite(event, content) {
    return this.getEventEmitter().emit(event, content);
  }
};

module.exports = function createWidget() {
  var widget = Object.create(genericWidget);
  widget.init();
  return widget;
};
