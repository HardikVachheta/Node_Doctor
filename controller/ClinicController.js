const ClinicSchema = require('../schema/ClinicSchema')

const addClinic = (req,res)=>{

    const user = new ClinicSchema(req.body)
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

const getClinicData = (req, res) => {
    
    ClinicSchema.find().populate('doctorId').exec((err,data)=>{
        if(err){
            res.status(404).json({
                message:"error in fetching data"  
            })
        }
        else{
            res.status(200).json({
                message:"data fetched successfully",
                data:data
            })
        }
        
    })

}

const getClinicDataWithDoctor = (req,res)=>{

        var id = req.params.id
    
        ClinicSchema.find({"doctorId":id}).populate('doctorId cityId').exec((err,data)=>{
            if(err){
                res.status(404).json({
                    message:"error in fetching data"  
                })
            }
            else{
                res.status(200).json({
                    message:"data fetched successfully",
                    data:data
                })
            }
        })
        
    
    }


const deleteClinic = (req, res) => {

    const id = req.params.id
    ClinicSchema.findByIdAndDelete(id, (err, success) => {
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

module.exports = {
    addClinic,
    getClinicData,
    deleteClinic,
    getClinicDataWithDoctor
}
