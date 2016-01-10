var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  req.getConnection(function(err,connection){

    connection.query('SELECT * FROM CHILD C,PARENT P WHERE C.PARENTID=P.ID ', function(err, rows, fields) {
      if (err){
        console.log('The err is: ', err);
      }
      connection.end();
      res.send(JSON.stringify(rows));
    });

  });

});

router.post('/',function(req, res, next){

  var input = JSON.parse(JSON.stringify(req.body));

  req.getConnection(function (err, connection) {

    var data = {
      parentid: input.parentid,
      childmobileno: input.childmobileno

    };

    var q = connection.query("INSERT INTO CHILD set ? ", data, function (err, rows) {

      if (err)
        console.log("Error inserting : %s ", err);

      res.send(JSON.stringify("i am mad"));

    });
    console.log(q.sql);

  });

});

module.exports = router;
