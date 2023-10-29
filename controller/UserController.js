const path = require('path');
const multer = require('multer');
const UserSchema = require('../schema/UserSchema')
const mailer = require('../util/mailer')


const sendMail = async (req, res) => {
    const { to, subject, message } = req.body
    const result = await mailer.sendMail(to, subject, message)
    res.status(200).json({
        message: 'Mail sent successfully',
        result: result
    })
}
// module.exports = {sendMail}

const forgot = async (req, res) => {

    var email = req.body.email

    if (email != undefined && email != "") {
        UserSchema.find({ email: email }).populate('role').exec((err, data) => {

            if (err) {
                res.status(500).json({
                    message: "error while fetching user"
                })
            }
            else {
                if (data != undefined && data != null && data.length > 0) {

                    const result = mailer.sendMail(email, "MEDICARE Doctor Managment ", "Your password is " + data[0]?.password)
                    res.status(200).json({
                        message: 'Mail sent successfully',
                        result: result
                    })
                }
                else {
                    res.status(404).json({
                        message: "user not found"
                    })
                }
            }
        })


    }
    else {
        res.status(404).json({
            message: "email and password both are required"
        })
    }


}

const addUser = (req, res) => {

    const user = new UserSchema(req.body)
    user.save((err, data) => {
        if (err) {
            res.status(500).json({
                message: "error in adding user",
                err: err
            })
        }
        else {
            res.status(201).json({
                message: "user added successfully",
                data: data
            })
        }

    })

}

const getUserData = (req, res) => {
    UserSchema.find((err, data) => {
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

const deleteUser = (req, res) => {

    const id = req.params.id
    UserSchema.findByIdAndDelete(id, (err, success) => {
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

const updateUser = (req, res) => {

    const id = req.params.id

    UserSchema.findByIdAndUpdate(id, req.body, (err, success) => {
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

const loginUser = (req, res) => {


    var email = req.body.email
    var password = req.body.password

    if (email != undefined && password != undefined && email != "" && password != "") {
        UserSchema.find({ email: email, password: password }).populate('role').exec((err, data) => {

            if (err) {
                res.status(500).json({
                    message: "error while fetching user"
                })
            }
            else {
                if (data != undefined && data != null && data.length > 0) {
                    res.status(200).json({
                        message: "user found",
                        data: data
                    })
                }
                else {
                    res.status(404).json({
                        message: "user not found"
                    })
                }
            }
        })


    }
    else {
        res.status(404).json({
            message: "email and password both are required"
        })
    }


}

const getUserDataWithRole = (req, res) => {

    // var id = req.params.id

    UserSchema.find().populate('role').exec((err, users) => {
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

const getUserById = (req, res) => {

    var id = req.params.id

    UserSchema.findById(id).populate('role').exec((err, data) => {
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



module.exports = {
    addUser,
    getUserData,
    deleteUser,
    updateUser,
    getUserById,
    loginUser,
    getUserDataWithRole,
    sendMail,
    forgot
}