const mongoose = require("mongoose");
var schema = mongoose.Schema;

var formSchema = new schema({
    categoryId : Number,
    categoryName : String,
    createdon : { type : Date},
    updatedon : { type : Date}
});

module.exports = mongoose.model("category", formSchema, "category");