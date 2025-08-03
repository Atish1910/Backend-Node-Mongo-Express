const { getDB } = require("../utils/databaseUtil");


module.exports = class Favourite {
  constructor(houseId) {
    this.houseId = houseId;
  }

  save() {
    const db = getDB();
    
      return db.collection('fevorites').insertOne(this);
  }

  static getFavourites() {
    const db = getDB();
    return db.collection("fevorites").find().toArray();
  }

  static deleteById(delHomeId, callback) {
    
  }
};
