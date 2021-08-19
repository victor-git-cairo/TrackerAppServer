const { User } = require('../models');

module.exports = {
  // all the endpoints
  async register(req, res) {
    try {
      const user = await User.create(req.body);
      console.log(req.body);
      res.send(user.toJSON());
    } catch (err) {
      console.log(err.message);
      res.status(400).send({
        error: 'This email account is already in use',
      });
    }
  },
};
