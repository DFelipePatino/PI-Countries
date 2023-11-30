const { Router } = require("express")
const { getActivities, postActivity } = require("../handlers/activitiesHandler")

const activitiesRouter = Router()

activitiesRouter.get("/", getActivities)
activitiesRouter.post("/", postActivity)

module.exports = activitiesRouter