const express = require('express');
const router = express.Router();
const path = require('path');

console.log({
  path: path.join(__dirname, './../../', 'frontend', 'build', 'index.html')
});

/* GET home page. */
router.get('/', (req, res, next) => {
  // res.render(
  //   path.join(__dirname, './../../', 'frontend', 'build', 'index.html')
  // );
});

module.exports = router;
