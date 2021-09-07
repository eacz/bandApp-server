const {v4: uuid} = require('uuid');

class Band {
  constructor(name){
    this.name = name
    this.votes = 0
    this.id = uuid()
  }
}

module.exports = Band