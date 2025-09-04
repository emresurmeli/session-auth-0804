const isSignedIn = (req, res, next) => {
  if (req.session.user) {
    next();
  }
  else {
    res.send("Can't use this route");
  }
} 

module.exports = isSignedIn;