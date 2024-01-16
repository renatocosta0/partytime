const mongoose = require("mongoose")

async function main () {
    try {
       mongoose.set("strictQuery", true)

       await mongoose.connect(
        `mongodb+srv://${process.env.DBUSER}:${process.env.DBPASS}@cluster0.kbdy0a6.mongodb.net/?retryWrites=true&w=majority`
       )
       
       console.log("Conectado ao banco")
    } catch (error) {
        console.log(`Erro: ${error}`)

    }
}

module.exports = main;