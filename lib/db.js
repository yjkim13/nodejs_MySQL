var mysql = require('mysql');
var db = mysql.createConnection({
    host        :'localhost',
    user        :'root',
    password    :'1q2w3e4r',
    database    :'opentutorials'
  });
  db.connect();
  module.exports = db;