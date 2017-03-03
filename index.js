'use strict';

/**
 * The module uses the js object to store state
 */
class StarbotStoreObject {
  constructor (settings, botName) {
    settings = settings || {};

    this.state = {};

    this.get = async (userId) => {
      return new Promise((resolve, reject) => {
        resolve(this.state[userId]);
      });
    };

    this.set = async (userId, newState) => {
      this.state[userId] = newState;

      return new Promise((resolve, reject) => {
        resolve(this.state[userId]);
      });
    };
  }
}

module.exports = StarbotStoreObject;
