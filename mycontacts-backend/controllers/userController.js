const asyncHandler = require('express-async-handler')
const bcrypt = require('bcrypt')
const User = require('../models/userModel')

//@desc Register a user
//@route POST /api/users/register
//@access public
const registerUser = asyncHandler(async (req, res)=> {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
        res.status(400)
        throw new Error("Please fill all fields")
    }
    const userAvailable = await User.findOne({email});
    if(userAvailable) {
        res.status(400)
        throw new Error("User already exists")
    }

    //Has password
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log("hashed Password:", hashedPassword)
    const user = await User.create({
        username,
        email,
        password: hashedPassword,
    })
    
    console.log(`User created ${user}`)
    if(user) {
        res.status(201).json({_id: user.id, email: user.email})
    } else {
        res.status(400)
        throw new Error("User data is not valid")
    }
    res.json({message: "Register user"})
})

//@desc Login user
//@route POST /api/users/login
//@access public
const loginrUser = asyncHandler(async (req, res)=> {
    res.json({message: "Login user"})
})

//@desc current user info
//@route POST /api/users/current
//@access private
const currentUser = asyncHandler(async (req, res)=> {
    res.json({message: "Current User information"})
})


module.exports = {registerUser, loginrUser, currentUser}