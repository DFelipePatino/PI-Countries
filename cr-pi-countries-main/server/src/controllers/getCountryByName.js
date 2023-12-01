const { Country } = require("../db")

const { Op } = require("sequelize");

const getCountryByName = async (nombre) => {
    const lowerCaseName = nombre.toLowerCase();
    return await Country.findOne({ where: { nombre: { [Op.iLike]: `%${lowerCaseName}%` } } })
}


module.exports = { getCountryByName }