const { Country, Activity } = require('../db');

const getCountriesByID = async (id) => await Country.findOne({
    where: { id: id }, include: [{
        model: Activity,
        as: 'Activities',
        attributes: ["nombre"],
        through: { attributes: [] }
    }]
})


module.exports = { getCountriesByID }