const express = require('express');
const { registerUser, loginUser, getUser } = require('../controllers/authController');
const { protect } = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);

router.route('/user')
  .get(protect, getUser);

module.exports = router;
