const router = require("express").Router();
const api = require("./api");
const users = require("./users")

router.use("/api", api);
router.use("/users", users);

module.exports = router;