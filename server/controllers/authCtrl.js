const bcrypt = require('bcryptjs')

module.exports = {
  register: async (req, res) => {
    const {user_name, password, location} = req.body
    const db = req.app.get('db')

    const existingUser = await db.check_user(user_name)

    if(existingUser[0]){
      return res.status(409).send('user already exists')
    }

    const salt = bcrypt.genSaltSync(10)
    const hash = bcrypt.hashSync(password, salt)

    const [newUser] = await db.register_user([user_name, hash, location ])

    req.session.user = newUser
    res.status(200).send(req.session.user)
  },

  login: async (req, res) => {},
  logout: (req, res) => {},
  getUser: async (req, res) => {},
}