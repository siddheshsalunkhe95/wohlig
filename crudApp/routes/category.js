const express = require("express");
var router = express.Router();
var controller = require("../controllers/categoryController.js");

/***************GET REQUEST***********************/
router.get("/master", function (req, res) {
    res.render("category/master", {
        title: "Category Master"
    });
});

router.get("/getData", function (req, res) {
    controller.getData(req, res);
});

router.get("/getRecord/:id", function (req, res) {
    controller.getRecord(req, res);
});

router.get("/delete/:id", function (req, res) {
    controller.delete(req, res);
});

/***************POST REQUEST***********************/
router.post('/addData', function (req, res) {
    controller.addData(req, res);
});

/***************PUT REQUEST***********************/
router.put("/update/:id", function (req, res) {
    controller.update(req, res);
});

module.exports = router;