const StateSchema = require('../schema/StateSchema')

const addState = (req,res)=>{

    const user = new StateSchema(req.body)
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

const getStateData = (req,res)=>{
    StateSchema.find((err,data)=>{
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

const deleteState = (req,res)=>{

    const id = req.params.id
    StateSchema.findByIdAndDelete(id,(err,success)=>{
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

const updateState = (req,res)=>{
    const id = req.params.id

    StateSchema.findByIdAndUpdate(id,req.body,(err,success)=>{
        if (err) {
            res.status(400).json({
                message:"error in updating user",
            })            
        } else {
            res.status(200).json({
                message:"user updated successfully",
            })
        }
    })
}


const getStateById = (req,res)=>{

    var id = req.params.id

    StateSchema.findById(id,(err,data)=>{
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



module.exports = {
    addState,
    getStateData,
    deleteState,
    updateState,
    getStateById 
}