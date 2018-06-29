const express = require("express"),
    alumniController = require("./alumni_controller.js"),
    alumniRoutes = express.Router()

alumniRoutes.post("/alumni", alumniController.post)
alumniRoutes.post("/alumni/filter", alumniController.get)
alumniRoutes.get("/alumni/:id", alumniController.get)
alumniRoutes.get("/alumni", alumniController.get)
alumniRoutes.put("/alumni/:id", alumniController.update)
alumniRoutes.delete("/alumni/:id", alumniController.delete)

module.exports = alumniRoutes
