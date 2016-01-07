/**
 * Created by Sunita Pc on 05/01/2016.
 */
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    req.getConnkklmjection(function(err,connection){

        connection.query('select * from parent', function(err, rows, fields) {
            if (err){
                console.log('The err is: ', err);
            }
            connection.end();
            res.send(JSON.stringify(rows));
        });

    });

});

exports.save = function(req,res) {

    var input = JSON.parse(JSON.stringify(req.body));

    req.getConnection(function (err, connection) {

        var data = {
            id: input.id,
            parentname: input.parentname,
            address: input.address,
            emailid: input.emailid,
            imie: input.imie,
            contactno: input.contactno,
            password : input.password

        };

        var query = connection.query("INSERT INTO parent set  ", data, function (err, rows) {

            if (err)
                console.log("Error inserting : %s ", err);

            res.redirect('/parent');

        });

    });
}

module.exports = router;
