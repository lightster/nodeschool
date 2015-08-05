'use strict';

var domify = require('domify');

var genericWidget = {
  init: function init() {
    this.element = null;
  },

  setName: function setName(name) {
    this.getElement().querySelector('.name').textContent = name;
  },

  appendTo: function appendTo(target) {
    target.appendChild(this.getElement());
  },

  getElement: function getElement() {
    if (this.element) {
      return this.element;
    }

    this.element = domify('<div>Hello <span class="name"></span>!</div>');

    return this.element;
  }
};

module.exports = function createWidget() {
  var widget = Object.create(genericWidget);
  widget.init();

  return widget;
};
