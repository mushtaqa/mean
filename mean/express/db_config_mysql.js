const mysql = require('mysql');


const connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'Tablechair@123',
    database : 'EmployeeDB'
});

connection.connect(function (err) {
    if(err) {
        console.log(err);

    } else {
        console.log('connected to mysql');
    }
});


module.exports = connection;