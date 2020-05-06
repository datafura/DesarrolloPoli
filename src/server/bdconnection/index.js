
const mysql = require('mysql');
const conBD = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'Semilleros',
    port: 3306
 });
 conBD.connect(function(error){
    if(error){
       console.log('tenemos un error de conexion con la base de datos');
    }else{ 
       console.log('Conexion a la base de datos correcta.');
    }
 });
 module.exports = {
    "conBD": conBD
}