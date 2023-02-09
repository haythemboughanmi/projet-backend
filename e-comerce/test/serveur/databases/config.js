require("dotenv").config()
const mysql=require("mysql2")
const connection = mysql.createConnection({
    host:'localhost' ,
    user:'root',
    password :"",
    database :"ecomerce"
})
connection.connect((error)=>{
    if (error)throw error
    console.log("dataBase connected")
})
module.exports={connection}

