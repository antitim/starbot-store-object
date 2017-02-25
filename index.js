'use strict';

/**
 * Хранилище использующее объект js для хранения состояния
 */
class StarbotStoreObject {
  constructor (settings) {
    settings = settings || {};

    this.run = function (botName) {
      let state = {};

      return {
        async get (userId) {
          return new Promise(function (resolve, reject) {
            resolve(state[userId]);
          });
        },
        async set (userId, newState) {
          state[userId] = newState;

          return new Promise(function (resolve, reject) {
            resolve(state[userId]);
          });
        }
      };
    };
  }
}

module.exports = StarbotStoreObject;
