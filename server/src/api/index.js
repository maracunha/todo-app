const express = require('express')

const users = require('./users/user.routes');
const tasks = require('./tasks/tasks.routes');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: "very nice thing"
  });
});

router.use('/users', users);
router.use('/tasks', tasks);

module.exports = router;
