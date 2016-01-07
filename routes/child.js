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

module.exports = router;
