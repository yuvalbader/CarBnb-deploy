const userService = require("../services/user")

module.exports = async function auth(req, res, next) {
  console.log("->authMiddleWare->");
  if (req.headers?.authorization) {
    let email = req.headers.authorization;
    const user = await userService.getUserByEmail(email);
    if (!user) {
      // throw new Error("User not found")
      console.log("authorization failed ");
    }
    console.log("authorization success");
  } else {
    console.log("authorization header not found ");
  }
  next();
};
