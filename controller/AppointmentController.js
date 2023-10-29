const appointmentSchema = require("../schema/AppointmentSchema");

const addAppointment = (req,res)=>{

    const role = new appointmentSchema(req.body)
    role.save((err,data)=>{
        if(err){
            res.status(500).json({
                message:"error in adding Appointment",
                err:err
            })
        }
        else{
            res.status(201).json({
                message:"Appointment added successfully",
                data:data
            })
        }

    })

}

const getAppointmentData = (req, res) => {
    appointmentSchema.find().populate('patientId doctorId clinicId').exec((err, data)=>{
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

const getAppointmentById = (req,res)=>{

    var id = req.params.id
    // patientId
    // doctorId
    // clinicId

    // appointmentSchema.findById('doctorId').populate('patientId doctorId clinicId').exec((err,data)=>{
        appointmentSchema.find({"doctorId":id}).populate('patientId doctorId clinicId').exec((err, data)=>{
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

const getAppointmentofUser = (req,res)=>{

    var id = req.params.id
    // patientId
    // doctorId
    // clinicId

    // appointmentSchema.findById('doctorId').populate('patientId doctorId clinicId').exec((err,data)=>{
        appointmentSchema.find({"patientId":id}).populate('patientId doctorId clinicId').exec((err, data)=>{
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


const updateAppointment = (req,res)=>{
    const id = req.params.id

    appointmentSchema.findByIdAndUpdate(id,req.body,(err,success)=>{
        if (err) {
            res.status(404).json({
                message:"error in updating appointment",
            })            
        } else {
            res.status(200).json({
                message:"appointment updated successfully",
            })
        }
    })
}

const deleteAppointment = (req,res)=>{

    const id = req.params.id
    appointmentSchema.findByIdAndDelete(id,(err,success)=>{
        if(err){
            res.status(404).json({
                message:"error in deleting appointment",
            })
        }
        else{
            res.status(200).json({
                message:"appointment deleted successfully",
                data:success
            })
        }
    })

}

module.exports = {
    addAppointment,
    getAppointmentById,
    updateAppointment,
    deleteAppointment,
    getAppointmentData,
    getAppointmentofUser
}
