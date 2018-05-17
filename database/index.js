const { Pool, Client } = require('pg');

//const connectionString = 'postgres://postgres:student@localhost:5432/kelp';
//onst connectionString = 'postgres://kzxrbjia:hxk-NHNH9p8KRSYHnHq6-VNSunCHD-CR@pellefant.db.elephantsql.com:5432/kzxrbjia';

const connectionString = 'postgres://postgres:postgres@db:5432/kelp';

/*
const client = new Client({
  connectionString: connectionString,
});
client.connect();
*/

const pool = new Pool({
  connectionString: connectionString,
});

module.exports.getById = (redis, businessId, callback) => {
  redis.get(businessId, (error, reply) => {
    if (error) {
      callback(null);
    } else if (reply) {
      callback(JSON.parse(reply));
    } else {
      //const connectionString = process.env.DATABASE_URL || 'postgres://postgres:student@localhost:5432/kelp';
      //const connectionString = 'postgres://kzxrbjia:hxk-NHNH9p8KRSYHnHq6-VNSunCHD-CR@pellefant.db.elephantsql.com:5432/kzxrbjia';
      const results = [];
      // Get a Postgres client from the connection pool
      
      pool.query('SELECT * FROM photosView where id=($1) ORDER BY id ASC;', [businessId], (err, res) => {
        for (var i = 0; i < res.rows.length; i++) {
          const row = res.rows[i];
          const result = {
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
        }

        callback(results);
        pool.end();
      });
    }
  });
}
/*
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
        console.log(results);
        // After all data is returned, close connection and return results
        query.on('end', () => {
          callback(results);
        });
      });
    }
  });
}
*/
