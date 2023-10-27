require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose')
const path = require('path')
const app = express();
const routerss = require('./routers/router.js')
const ejs = require('ejs')
app.set('view engine','ejs')
const viewPath = path.join(process.cwd(),'frontend','view')
//console.log(viewPath);
const staticPath = path.join(process.cwd(),'frontend','public')
app.use(express.static('../frontend/public'))

// const staticpath = path.join(process.cwd(),'backend','.env')
// app.use(express.static(staticpath))

//app.use('/check',express.static())
app.set('views','../frontend/view')
app.use(express.urlencoded({extended:false}))
const url = process.env.URL 
const dbConnection = require('./db/dbConnection.js')
dbConnection(url)
app.use('/',routerss)
const a = process.env.PORT 
app.listen(a,()=>{
    
})