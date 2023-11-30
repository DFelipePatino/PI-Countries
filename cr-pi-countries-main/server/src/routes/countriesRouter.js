const { Router } = require("express")
const { getCountries, countryByID } = require("../handlers/countriesHandlers")

const countriesRouter = Router()

countriesRouter.get("/", getCountries)
countriesRouter.get("/:id", countryByID)


module.exports = countriesRouter