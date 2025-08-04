const fs = require("fs");
const path = require("path");
const pathUtils = require("../utils/pathUtils");

const homeDataPath = path.join(pathUtils, "data", "homes.json");
module.exports = class Home {
  constructor(houseName, price, location, ratings, photoUrl) {
    this.houseName = houseName;
    this.price = price;
    this.location = location;
    this.ratings = ratings;
    this.photoUrl = photoUrl;
  }

  save() {
    Home.fetchAll((registeredHome) => {
      registeredHome.push(this);
      fs.writeFile(homeDataPath, JSON.stringify(registeredHome), (error) => {
        console.log("error while writing file", error);
      });
    });
  }

  static fetchAll(callback) {
    fs.readFile(homeDataPath, (err, data) => {
      callback(!err ? JSON.parse(data) : []);
    });
  }
};
