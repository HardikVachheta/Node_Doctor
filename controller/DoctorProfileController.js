const path = require('path');
const multer = require('multer');
const DoctorProfileSchema = require('../schema/DoctorProfileSchema')

const addDoctor = (req, res) => {

    const doctor = new DoctorProfileSchema(req.body)
    // console.log(doctor)
    doctor.save((err, data) => {
        if (err) {
            res.status(500).json({
                message: "error in adding user",
                err: err
            })
        }
        else {
            if (data != null || data != undefined || data.length != 0) {
                res.status(201).json({
                    message: "user added successfully",
                    data: data
                })
            } else {
                res.status(404).json({
                    message: "Users not found",
                })
            }
        }

    })

}

const getDoctor2 = (req,res)=>{
    DoctorProfileSchema.find((err,data)=>{
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
const getDoctor3 = (req,res)=>{
    DoctorProfileSchema.find().populate('userId').exec((err,data)=>{
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

// const getDoctorDataWithUser = (req, res) => {
// const id=req.params.id;
// console.log(id);
//     DoctorProfileSchema.findOne({"userId":id}).exec((err, users) => {
//         console.log(">>>>>>>>>>>>>>>>>>>>>",users);
//         if (err) {
//             res.status(500).json({
//                 message: "Error in getting users",
//                 err: err
//             })
//         }
//         else {
//             if (users != null || users != undefined || users.length != 0) {
//                 res.status(200).json({
//                     message: "Users fetched successfully",
//                     users: users
//                 })
//             }
//             else {
//                 res.status(404).json({
//                     message: "Users not found",
//                 })
//             }

//         }
//     })

// }


const getDoctorDataWithUser=(req,res)=>{
    const id=req.params.id;
    DoctorProfileSchema.findOne({"userId":id},(err,data)=>{
        if (err) {
            res.status(500).json({
                message: "Error in getting users",
                err: err
            })
        }else {
            
            res.status(200).json({
                message: "user updated successfully",
                data:data
            })
        }
    })
}
const updateDoctorDataWithUser = (req, res) => {

    DoctorProfileSchema.find().populate('userId').exec((err, users) => {
        if (err) {
            res.status(500).json({
                message: "Error in getting users",
                err: err
            })
        }
        else {
            if (users != null || users != undefined || users.length != 0) {

                const id = req.params.id

                DoctorProfileSchema.findByIdAndUpdate(id, req.body, (err, success) => {
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
            else {

                res.status(200).json({
                    message: "Users fetched successfully",
                    users: users
                })
            }

        }
    })

}

const updateDoctor = (req, res) => {
    const id = req.params.id

    DoctorProfileSchema.findByIdAndUpdate(id, req.body, (err, success) => {
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

const getDoctorById = (req,res)=>{

    var id = req.params.id



    DoctorProfileSchema.findById(id).populate('userId').exec((err,data)=>{
    // DoctorProfileSchema.find(id,(err,data)=>{

    // DoctorProfileSchema.findById(id,(err,data)=>{
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

const deleteDoctor = (req,res)=>{

    const id = req.params.id
    DoctorProfileSchema.findByIdAndDelete(id,(err,success)=>{
        if(err){
            res.status(404).json({
                message:"error in deleting user",
            })
        }
        else{
            res.status(200).json({
                message:"user deleted successfully",
                data:success
            })
        }
    })

}


const storage = multer.diskStorage({
    destination: "C://Pro//Royal//MY Project//Doctor Managment//Reactjs_Folder//doctor//public//Photos",
    filename: function(req, file, cb){
        cb(null,file.originalname);
    }
})

const upload = multer(
    {
        storage: storage,
        limits: {
            fileSize: 9000000
        },
    }
).single('profile_pic');

const uploadFile = (req, res) => {

    console.log(req.file);
    upload(req,res,(err)=>{
        if(err){
            res.status(500).json({
                error: err,
                message: 'Error uploading file'
                
            })
        }
        else{
            console.log(req.file.originalname);
            //size
            console.log(req.file.size);
            //abs path
            console.log(req.file.path);
            var p= path.join(__dirname, '../profile_pic/'+req.file.originalname);
            console.log(p);

            //type
            

            if(req.file == undefined){
                res.status(400).json({
                    message: 'No file selected'
                })
            }
            else{

                const fileUpload = new DoctorProfileSchema({
                    profile_pic: req.file.originalname,
                    qualification:req.body.qualification,
                    specialization:req.body.specialization,
                    experience:req.body.experience,
                    about:req.body.about,
                    registrationno:req.body.registrationno,
                    userId:req.body.userId
                    
                    
                })
                fileUpload.save((err,data)=>{
                    if(err){
                        res.status(500).json({
                            error: err,
                            message: 'Error uploading file to db'
                        })
                    }
                    else{
                        res.status(200).json({
                            message: 'File uploaded successfully',
                            file: req.file.originalname
                        })
                    }
                })

            }
        }

    })

}

module.exports = {
    addDoctor,
    getDoctorDataWithUser,
    updateDoctor,
    updateDoctorDataWithUser,
    getDoctorById,
    deleteDoctor,
    uploadFile,
    getDoctor2,
    getDoctor3
}