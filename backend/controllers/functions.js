const CountryModel = require("../models/model")


exports.addCountry = async(req, res)=>{


    const {position, country, song, points, position2023} = req.body;

    const newCountry = CountryModel({
        position,
        country,
        song,
        points,
        position2023
    })


    try {

        if(!position || !country  || !song  || !points  || !position2023){
            return res.status(400).json({message: "All field required!"})
        }

        await newCountry.save()
        res.status(200).json({message: "Data saved in DB!"})
        
    } catch (error) {
        res.status(500).json({message: "Couldnt save the data!"})
        console.log("error")
    }

    console.log(newCountry)

}



exports.getCountry = async(req, res)=>{
    try {

        const notes = await CountryModel.find()
        res.status(200).json(notes)
        
    } catch (error) {
        res.status(500).json({message: "Couldnt get the data!"})
    }
}