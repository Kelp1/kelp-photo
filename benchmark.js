const siege = require('siege');

siege()
  .on(3003)
  .for(100000).times
  .concurrent(100)
  .get('/api/photo/1000')
  .attack()