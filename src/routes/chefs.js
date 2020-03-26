const express = require("express");
const routes = express.Router();
const multer = require("../app/middlewares/multer");
const chef = require("../app/controllers/chefs");

const { onlyAdmin } = require("../app/middlewares/session");

routes.get("/chefs", chef.index);
routes.get("/chefs/create", onlyAdmin, chef.create);
routes.get("/chefs/:id", chef.show);
routes.get("/chefs/:id/edit", onlyAdmin, chef.edit);
routes.post("/chefs", multer.array("images", 1), chef.post);
routes.put("/chefs", onlyAdmin, multer.array("images", 1), chef.put);
routes.delete("/chefs", chef.delete);

module.exports = routes;
