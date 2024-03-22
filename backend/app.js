const express = require("express")
const cors = require("cors")
require("dotenv").config()


const {db} = require("./db/db")
const app = express()
const PORT = process.env.PORT;

const { readdirSync } = require("fs")


app.use(cors())
app.use(express.json())


readdirSync("./routes").map((route) => app.use("/api/v1", require("./routes/" +  route)))

const server = () =>{

    db()

    app.listen(PORT, ()=>{
        console.log("You are listenting to " + PORT)
    })
}


server()