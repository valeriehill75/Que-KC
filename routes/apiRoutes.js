const router = require("express").Router();
// const db = require("../models/review");

router.get('/', (req, res) => { res.json({ msg: 'hi' }) })

module.exports = router;