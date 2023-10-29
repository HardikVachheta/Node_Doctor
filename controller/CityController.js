const CitySchema = require('../schema/CitySchema')

const addCity = (req,res)=>{

    const user = new CitySchema(req.body)
    user.save((err,data)=>{
        if(err){
            res.status(500).json({
                message:"error in adding user",
                err:err
            })
        }
        else{
            res.status(201).json({
                message:"user added successfully",
                data:data
            })
        }

    })

}

const getCityData = (req, res) => {
    CitySchema.find((err, data) => {
        if (err) {
            res.status(404).json({
                message: "error in fetching data"
            })
        }
        else {
            res.status(200).json({
                message: "data fetched successfully",
                data: data
            })
        }

    })

}

const deleteCity = (req, res) => {

    const id = req.params.id
    CitySchema.findByIdAndDelete(id, (err, success) => {
        if (err) {
            res.status(404).json({
                message: "error in deleting user",
            })
        }
        else {
            res.status(200).json({
                message: "user deleted successfully",
                data: success
            })
        }
    })

}

const updateCity = (req, res) => {
    const id = req.params.id

    CitySchema.findByIdAndUpdate(id, req.body, (err, success) => {
        if (err) {
            res.status(400).json({
                message: "error in updating user",
            })
        } else {
            res.status(200).json({
                message: "user updated successfully",
            })
        }
    })
}


const getCityById = (req, res) => {

    var id = req.params.id

    CitySchema.findById(id, (err, data) => {
        if (err) {
            res.status(404).json({
                message: "error in fetching data"
            })
        }
        else {
            res.status(200).json({
                message: "data fetched successfully",
                data: data
            })
        }
    })


}

const getCityDataWithState = (req, res) => {

    // var id = req.params.id

    CitySchema.find().populate('stateId').exec((err, users) => {
        if (err) {
            res.status(500).json({
                message: "Error in getting users",
                err: err
            })
        }
        else {
            if (users != null || users != undefined || users.length != 0) {
                res.status(200).json({
                    message: "Users fetched successfully",
                    users: users
                })
            }
            else {
                res.status(404).json({
                    message: "Users not found",
                })
            }

        }
    })

}




module.exports = {
    addCity,
    getCityData,
    deleteCity,
    updateCity,
    getCityById,
    getCityDataWithState
}