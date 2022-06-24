/* users.js
Students's name: Arish Qureshi
StudentID: 301176321
Date: 24 June, 2022
*/

let express = require('express');
let router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
