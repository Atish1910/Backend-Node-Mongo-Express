// core module
const fs = require("fs");
const path = require("path");
const pathUtil = require("../utils/pathUtil");
const { error } = require("console");
const { data } = require("autoprefixer");

module.exports = class Home {
  constructor(houseName, price, location, rating, photoUrl) {
    this.houseName = houseName;
    this.price = price;
    this.location = location;
    this.rating = rating;
    this.photoUrl = photoUrl;
  }
  save() {
    this.id = Math.random().toString();
    Home.fetchAll((registeredHomes) => {
      registeredHomes.push(this);
      const homeDataPath = path.join(pathUtil, "data", "homes.json");
      fs.writeFile(homeDataPath, JSON.stringify(registeredHomes), error => {
        console.log("file writing concluded", error);
      });
    });
  }

  static fetchAll(callback) {
    const homeDataPath = path.join(pathUtil, "data", "homes.json");
    fs.readFile(homeDataPath, (err, data) => {
      console.log("file read", err, data);
      callback(!err ? JSON.parse(data) : []);
    });
  }

  static findById(homeId,callback) {
    this.fetchAll(homes => {

    const homeFound =  homes.find(home => home.id === homeId);
    callback(homeFound);
    })
  }
};
