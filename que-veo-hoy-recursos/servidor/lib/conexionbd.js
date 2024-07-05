var mysql      = require('mysql');

var connection = mysql.createConnection({
  host     : '127.0.0.1',
  port     : '33065',
  user     : 'root',
  database : 'queveohoy'
});
module.exports = connection;

