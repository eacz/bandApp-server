const Band = require("./band");

class BandList {
  constructor(){
    this.bands = [
      new Band('BTR'),
      new Band('1D'),
      new Band('Maroon 5'),
      new Band('ZzZzZzZzZ'),
    ]
  }

  addBand(name){
    const newBand = new Band(name);
    this.bands.push(newBand)
    return newBand;
  }

  removeBand(id){
    this.bands = this.bands.filter(band => band.id !== id);
  }

  increaseVotes(id){
    this.bands = this.bands.map(band => {
      if(band.id === id ) {
        band.votes+=1 
      }
      return band
    })
  }

  changeName(id, newName){
    this.bands = this.bands.map(band => {
      if(band.id === id ) {
        band.name = newName 
      }
      return band
    })
  }

  
}