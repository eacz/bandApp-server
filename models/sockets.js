const BandList = require('./band-list');

class Sockets {
  constructor(io) {
    this.io = io
    this.bandList = new BandList()
    this.socketEvents()
  }

  socketEvents() {
    this.io.on('connection', (socket) => {
      console.log('Client connected');

      //emit to client all the bands
      socket.emit('current-bands', this.bandList.getBands())
      
      socket.on('vote-band', (bandId) => {
        this.bandList.increaseVotes(bandId) 
        this.io.emit('current-bands', this.bandList.getBands())
      })
    })
  }
}

module.exports = Sockets
