module.exports = app => {
    const estabs = require("../controllers/estab.controller.js");
  
    var router = require("express").Router();
  
    router.post("/", estabs.create);
  
    router.get("/", estabs.findAll);
  
    router.get("/published", estabs.findAllPublished);
  
    router.get("/:id", estabs.findOne);

    router.put("/:id", estabs.update);
  
    router.delete("/:id", estabs.delete);
  
    router.delete("/", estabs.deleteAll);
  
    app.use('/api/estabs', router);
  };