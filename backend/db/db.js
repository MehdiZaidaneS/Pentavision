const moongose = require("mongoose")


const db = async () =>{
    try {
        await moongose.connect(process.env.MONGO_URL)
        console.log("Connected to DB")
        
    } catch (error) {
        console.log("DB connection error")
    }
}


module.exports = {db}