const jwt = require("jsonwebtoken")
const constant = require("./secret")

function restrict() {
	return async (req, res, next) => {

		const secret = constant.jwtSecret;
		const authError = {
			message: "Access Denied",
		}

		try {
      const token = req.headers.authorization
      if (!token) {
        return res.status(401).json(authError)
      }
      jwt.verify(token, secret, (err, decoded) => {
        if (err) { return res.status(401).json(authError)
      }

			next()
		}) } catch (err) {
			next(err)
		}
	}
}

module.exports = restrict
