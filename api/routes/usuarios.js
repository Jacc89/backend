const express = require('express');
const route = express.Router();

const mysqlConnection = require('../conecction/conection');
route.get('/', (res,req)=>{

    mysqlConecction.query('select * from usuarios', (err, rows, fields)=>{
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    })
});

route.post('/singin',( res,req)=>{

    console.log(req.body);
    const {id} = re.body;
    mysqlConnection.query('select * from usuarios where id= ? ',
    [id,correo, password, fecha_registro],
    (err,rows, fields)=>{
        if (!err) {
            console.log(rows);
            
        }else{
            console.log(err);
        }
    })
})

module.exports= route;