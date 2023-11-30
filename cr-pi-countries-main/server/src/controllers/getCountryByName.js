const { Country } = require("../db")

const { Op } = require("sequelize");

const getCountryByName = async (name) => {
    const lowerCaseName = name.toLowerCase();
    return await Country.findOne({ where: { name: { [Op.iLike]: `%${lowerCaseName}%` } } })
}


module.exports = { getCountryByName }