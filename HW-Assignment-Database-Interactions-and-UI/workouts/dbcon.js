var mysql = require('mysql');
// var pool = mysql.createPool({
//   connectionLimit : 10,
//   host            : 'mysql.eecs.oregonstate.edu',
//   user            : 'cs290_cookjone',
//   password        : 'blazzed8hearingFIREsprinkler',
//   database        : 'cs290_cookjone'
// });

var pool  = mysql.createPool({
  port: 3306,
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'my_database'
});

pool.getConnection(function(err, connection) {
  if (err) throw err
  console.log('You are now connected...')
});

module.exports.pool = pool;
