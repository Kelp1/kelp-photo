const pg = require('pg');

module.exports.getById = (redis, businessId, callback) => {
  redis.get(businessId, (error, reply) => {
    if (error) {
      callback(null);
    } else if (reply) {
      callback(JSON.parse(reply));
    } else {
      const connectionString = process.env.DATABASE_URL || 'postgres://postgres:student@localhost:5432/kelp';
      const results = [];
      // Get a Postgres client from the connection pool
      pg.connect(connectionString, (err, client, done) => {
        // Handle connection errors
        if (err) {
          console.log(err);
        }
        // SQL Query > Select Data
        const query = client.query('SELECT * FROM photosView where id=($1) ORDER BY id ASC;', [businessId]);
        // Stream results back one row at a time
        query.on('row', (row) => {
          let result = {
            photoId: row.photoid,
            photoUrl: row.photourl,
            id: row.id,
            date: row.photodate,
            userId: row.userid,
            userName: row.username,
            userFollowers: row.userfollowers,
            userReviews: row.userreviews,
          };
          results.push(result);
        });
        // After all data is returned, close connection and return results
        query.on('end', () => {
          callback(results);
        });
      });
    }
  });
}