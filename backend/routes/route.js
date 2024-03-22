const { addCountry, getCountry } = require("../controllers/functions")


const router = require("express").Router()

router.post("/add-country", addCountry)
      .get("/get-countries", getCountry)




module.exports = router