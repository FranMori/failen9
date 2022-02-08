const User = require('../models/user')
const bcrypt = require ('bcrypt')
const jwt = require ('jsonwebtoken')
const config = require("../utils/auth.config");

// Signup

const signup = async(req, res) => {
  const hash = bcrypt.hashSync(req.body.password, 10)
  try {
    const user = await User.create(Object.assign(req.body, {password:hash}))
    return res.status(201).json({
      user,
    })
  } catch (error) {
    return res.status(500).json({error:error.message})
  }
}

// Login

const login = async (req,res) => {
  const user = await User.findOne ({
    where : {pseudo: req.body.pseudo}
  })
  if (user) {
    const password_valid = await bcrypt.compare (req.body.password, user.password)
    if(password_valid) {
      res.status(200).json({
        userId: user.id,
        accessToken: jwt.sign(
          {id: user.id},
          config.secret,
          {expiresIn:'24h'}
        )
      })
    } else {
      res.status(400).json ({error: "Mot de passe incorrect"})
    }
  } else {
    res.status(400).json({error : "Pseudo incorrect"})
  }
}

// logout

const logout = async (req, res) => {
  req.session.destroy()
  res.redirect('/')
}

module.exports = {
  signup, login, logout
}