var fs = require('fs'),
    request = require('request');

var download = async function(uri, filename, callback){
  await request.head(uri, function(err, res, body){
    console.log(filename);
    console.log('content-type:', res.headers['content-type']);
    console.log('content-length:', res.headers['content-length']);

    await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
  });
};

for (var i = 1; i < 1000; i++) {
download(`https://picsum.photos/790/750/?image=${i}`, `pic${i}.png`, function(){
  console.log(i);
});
}