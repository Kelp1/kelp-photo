const fs = require('fs');
const faker = require('faker');
const moment = require('moment');

var id3 = 0;
for (let i = 0; i < 1; i += 1) {
  let lines = [];
  for (let k = 0; k < 10000; k += 1) {
    id3 += 1;
  	  const userSchema = [
				id3,
				faker.name.firstName(),
				Math.floor(Math.random() * 100),
				Math.floor(Math.random() * 100)
			];
  	  lines.push(userSchema.join('|'));
    }
  if (id3 % 1000 === 0) {console.log(id3)}
  fs.appendFileSync('users.csv', lines.join('\n') + '\n');
}

console.log('done with users');

var id = 0;
var id2 = 0;
for (let i = 0; i < 1000; i += 1) {
  let lines = [];
  for (let k = 0; k < 10000; k += 1) {
    id += 1;
    for (let p = 1; p < Math.floor(Math.random() * 10) + 1; p += 1) {
      id2 += 1;
  	  const photoSchema = [
			id2,
			Math.floor(Math.random() * 10) + 1,
    	id,
    	`https://s3.us-east-2.amazonaws.com/hrsf93photos/pic${Math.floor(Math.random() * 800) + 1}.png`,
    	moment(faker.date.past()).format('MM/DD/YYYY h:mm:ss a')
  	  ];
  	  lines.push(photoSchema.join('|'));
    }
  }
  if (id % 1000 === 0) {console.log(id)}
  fs.appendFileSync('photos.csv', lines.join('\n') + '\n');
}

console.log('done with photos');