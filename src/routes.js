const express = require('express');

const routes = express.Router();

const PostController = require('./app/controllers/PostController');

const ValidateRepositorieId = require('./app/middlewares/ValidateRepositorieID');

routes.use('/repositories/:id', ValidateRepositorieId);

routes.get("/repositories", PostController.index);

routes.post("/repositories", PostController.create);

routes.put("/repositories/:id", PostController.update);

routes.delete("/repositories/:id", PostController.delete);

routes.post("/repositories/:id/like", PostController.addLike);

module.exports = routes;