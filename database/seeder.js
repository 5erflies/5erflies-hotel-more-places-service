const faker = require('faker');
const db = require('./index.js');
const mongoose = require('mongoose');
const mockData = require('../mockData.js');

// let data = mongoose.connection;
const seeder = () => {
  // data.dropDatabase();
  for (let i = 0; i < 100; i++) {
    const newPlace = new db.relatedPlaces({
      propertyId: i,
      img: faker.random.arrayElement(mockData.propertyImg),
      isSuperHost: faker.random.boolean(),
      propertyType: faker.random.arrayElement(mockData.propertyType),
      numOfRooms: faker.random.number({
        min: 1,
        max: 5,
      }),
      rating: faker.random.number({
        min: 3,
        max: 5,
      }),
      numOfRatings: faker.random.number(300),
      description: faker.random.arrayElement(mockData.propertyDescription),
      price: faker.random.number({
        min: 50,
        max: 400,
      }),
    });
    for (let j = 0; j < 12; j += 1) {
      // console.log(results, 'results ')
      const randomNumGen = () => {
        if (newPlace.similarPlaces.length >= 12) {
          return;
        }
        const randomNum = Math.floor(Math.random() * Math.floor(100));
        if (randomNum === i || newPlace.similarPlaces.indexOf(randomNum) !== -1) {
          return randomNumGen();
        }
        newPlace.similarPlaces.push(randomNum);
        newPlace.save((error) => {
          if (error) {
            console.error(error);
          }
        });
      };
      randomNumGen();

    newPlace.save((err) => {
      if (err) {
        console.log(err);
      }
    });
  }
};
}
seeder();

// module.exports.seeder = seeder;