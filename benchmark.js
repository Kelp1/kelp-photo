const siege = require('siege');

siege()
  .for(100000).times
  .concurrent(100)
  .get('18.191.93.185/api/photo/1000')
  .attack()