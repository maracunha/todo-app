const express = require('express');

const Task = require('./tasks.model');

const router = express.Router();

const errorMessages = {
  emailInUse: 'Email in use.',
  taskNotFound: 'Task not found',
};

router.get('/:user_id', async (req, res) => {
  const task = await Task.findAll({
    where: {
      userId: req.params.user_id,
    },
  });
  res.json(task);
});

router.post('/:user_id/new', async (req, res, next) => {
  const { title, description } = req.body;
  try {
    const createTask = {
      title,
      description,
      userId: req.params.user_id,
      state: 'todo',
    };

    const createResult = await Task.sync().then(() => Task.create(createTask));

    const payload = {
      id: createResult.id,
    };

    res.json({
      user: payload,
    });
  } catch (error) {
    next(error);
  }
});

router.put('/:user_id/:task_id', async (req, res, next) => {
  const { title, description, state } = req.body;
  try {
    const updateUser = {
      title,
      description,
      state,
      userId: req.params.user_id,
    };

    const task = await Task.findByPk(req.params.task_id);
    if (!task) {
      const error = new Error(errorMessages.taskNotFound);
      res.status(404);
      throw error;
    }

    const updateResult = await Task.update(updateUser, {
      where: {
        id: req.params.task_id,
      },
    });

    res.json({
      updateResult,
      data: 'update success',
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
