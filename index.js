'use strict';

/**
 * The module uses the js object to store state
 */
class StarbotStoreObject {
  constructor () {
    this.state = {};
  }

  get (key) {
    return this.state[key];
  };

  set (key, value) {
    this.state[key] = value;
  };
}

module.exports = StarbotStoreObject;
