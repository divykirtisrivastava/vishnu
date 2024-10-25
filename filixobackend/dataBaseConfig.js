const mysql=require('mysql')
let connection=mysql.createConnection({
    host: "localhost",
    user:"root",
    database: "vishnutrade",
    password:'Divy@9305'
})
//new
module.exports=connection