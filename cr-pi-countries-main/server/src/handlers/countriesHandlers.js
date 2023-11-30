const { getCountryByName } = require("../controllers/getCountryByName")
const { getAllCountries } = require("../controllers/getAllCountries")
const { getCountriesByID } = require("../controllers/getCountriesByID")



const getCountries = async (req, res) => {
    const { name } = req.query;
    try {
        if (name) {
            const response = await getCountryByName(name);
            res.status(200).json(response);
        } else {
            const response = await getAllCountries();
            res.status(200).json(response);
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

const countryByID = async (req, res) => {
    const { id } = req.params;

    try {
        const response = await getCountriesByID(id);
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}


module.exports = {
    getCountries,
    countryByID,
}