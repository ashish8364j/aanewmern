const mongoose = require('mongoose')
const dbConnection = async(URL)=>{
    try{
        const obj = {
            dbName : process.env.DBNAME
        }
        mongoose.connect(URL,obj)
        
    }
    catch(err){
        
    }
}
module.exports = dbConnection