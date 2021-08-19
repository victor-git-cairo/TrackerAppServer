const Joi = require('joi')

module.exports = {
  register(req, res, next) {
    const schema = Joi.object({
      email: Joi.string().email(),
      password: Joi.string().regex(new RegExp('^[a-zA-Z0-9]{8,32}$')),
    })

    const { error, value } = schema.validate(req.body)

    if (error) {
      console.log(error.details[0].context.key)
      switch (error.details[0].context.key) {
        case 'email':
          res.status(400).send({
            error: 'You must provide a valid email address',
          })
          break
        case 'password':
          res.status(400).send({
            error: `<p>The password that you provided failed to match the following rules</p><p> 1. It must contain ONLY the following characters: lower case, upper case, numeric</p><p>2. It must be at least 8 characters in length and not greater than 32 charactes in length</p>`,
          })
          break
        default:
          res.status(400).send({ error: 'Invalid registration format' })
      }
    } else {
      next()
    }
  },
}
