module.exports = (app) => {
  //endpoints
  app.post("/register", (req, res) => {
    res.send({
      message: `The user ${req.body.email} is now registered`,
    });
  });
};
 