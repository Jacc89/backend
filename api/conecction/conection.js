const mysql = require ('mysql');

const mysqlConnection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password: '',
    database: 'login',
    port:'3306'
});

mysqlConnection.connect(err =>{
    if(err){
        console.log('error en db:', err);
    }else{
        console.log('Db ok')
    }
});

module.exports = mysqlConnection;

