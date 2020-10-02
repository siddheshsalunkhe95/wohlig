const model = require("../models/categoryModel.js");

module.exports = {
    /**
    * desc : Saves Form Data.
    */
    addData: function (req, res) {
        try {
            var formData = req.body;

            formData.createdon = new Date();

            var data = new model(formData);
            data.save(function (error, result) {
                if (error) {
                    return res.status(500).json({
                        success: false,
                        message: "Internal Server Error",
                        err: error,
                        data: []
                    })
                } else {
                    return res.status(200).json({
                        success: true,
                        message: "Data Successfully Saved :- addData",
                        err: [],
                        data: result
                    });
                }
            });
        } catch (e) {
            return res.status(500).json({
                err: e,
                success: false
            })
        }
    },

    /**
    * desc : Gets List Of All Data.
    */
    getData: function (req, res) {
        try {
            model.find({}).lean().exec(function (error, result) {
                if (error) {
                    return res.status(500).json({
                        success: false,
                        message: "Internal Server Error",
                        err: err,
                        data: []
                    })
                } else {
                    return res.status(200).json({
                        success: true,
                        message: "Data Successfully Saved :- getData",
                        err: [],
                        data: result
                    });
                }
            });
        }
        catch (e) {
            return res.status(500).json({
                err: e,
                success: false
            })
        }
    },

    /**
    * desc : Gets Selected Id Data.
    */
    getRecord: function (req, res) {
        var id = req.params.id;
        try {
            model.findOne({ "_id": id }).lean().exec(function (error, result) {
                if (error) {
                    return res.status(500).json({
                        success: false,
                        message: "Internal Server Error",
                        err: err,
                        data: []
                    })
                } else {
                    return res.status(200).json({
                        success: true,
                        message: "Data Fetched Successfully :- getRecord",
                        err: [],
                        data: result
                    });
                }
            });
        }
        catch (e) {
            console.log(e);
            return res.status(500).json({
                err: e,
                success: false
            })
        }
    },

    /**
    * desc : Update Selected Id Data.
    */
    update: function (req, res) {
        var formData = req.body;
        formData.updatedon = new Date(Date.now()).toISOString();
        var id = req.params.id;

        model.updateOne({
            _id: id
        },
            {
                $set: formData
            }).lean().exec(function (error, result) {
                if (error) {
                    return res.status(500).json({
                        success: false,
                        message: "Internal Server Error",
                        err: error,
                        data: []
                    })
                } else {
                    return res.status(200).json({
                        success: true,
                        message: "Data Successfully Updated",
                        err: [],
                        data: result
                    });
                }
            });
    },

    /**
    * desc : Delete Selected Id Data.
    */
    delete: function (req, res) {
        var id = req.params.id;

        model.deleteOne({ '_id': id }).lean().exec(function (error, result) {
            if (error) {
                return res.status(500).json({
                    success: false,
                    message: "Internal Server Error",
                    err: error,
                    data: []
                });
            } else {
                return res.status(200).json({
                    success: true,
                    message: "Data Successfully Deleted",
                    err: [],
                    data: result
                })
            }
        });
    },

}