const { Activity } = require("../db")

const getAllActivities = async () => await Activity.findAll()

module.exports = { getAllActivities }