const fs = require('fs');
const faker = require('faker');

var id = 0;
var id2 = 0;
for (var i = 0; i < 1000; i++) {
    let lines = [];
    for (var k = 0; k < 10000; k++) {
        id2 += 1;
        for (var j = 0; j < Math.random() * 10; j++) {
            id += 1;
            var photoSchema = {
                photoId: id,
                photoUrl: `https://s3.us-east-2.amazonaws.com/hrsf93photos/pic${Math.floor(Math.random() * 1000)}.png`,
                id: id2,
                date: faker.date.past(),
                userId: Math.floor(Math.random() * 1000),
                userName: faker.name.firstName(),
                userFollowers: Math.floor(Math.random() * 100),
                userReviews: Math.floor(Math.random() * 100)
            }
            lines.push(JSON.stringify(photoSchema));
        }
    }
    if (id2 % 1000 === 0) {console.log(id2)}
    fs.appendFileSync('./picture8.json', lines.join('\n')) + '\n';
}

console.log('done');