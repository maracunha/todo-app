const express = require('express');
const yup = require('yup');

const User = require('./user.model');

const router = express.Router();

const schema = yup.object().shape({
  name: yup.string().trim().min(2).required(),
  email: yup.string().trim().email().required(),
});

const errorMessages = {
  emailInUse: 'Email in use.',
  userNotFound: 'User not found',
};

router.get('/', async (req, res) => {
  const users = await User.findAll();
  res.json(users);
});

router.post('/new', async (req, res, next) => {
  const { name, email } = req.body;
  try {
    const createUser = { name, email };
    await schema.validate(createUser, {
      abortEarly: false,
    });

    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      const error = new Error(errorMessages.emailInUse);
      res.status(403);
      throw error;
    }

    const createResult = await User.create(createUser)

    // const createResult = await User.sync().then( () => {
    //   return User.create(createUser)
    // });
     
    const payload = {
      id: createResult.id,
      name,
      email,
    };
  
    res.json({
      user: payload
    });
  } catch (error) {
    next(error);
  }
});

router.put('/:id', async (req, res, next) => {
  const { name, email } = req.body;
  try {
    const updateUser = { name, email };
    await schema.validate(updateUser, {
      abortEarly: false,
    });

    const user = await User.findByPk(req.params.id);
    if (!user) {
      const error = new Error(errorMessages.userNotFound);
      res.status(404);
      throw error;
    }
    
    const updateResult = await User.update(updateUser, {
      where: {
        id: req.params.id
      }
    });
     
    const payload = {
      id: updateResult.id,
      name,
      email,
    };
  
    res.json({
      user: payload
    });
  } catch (error) {
    next(error);
  }
});

router.delete('/:id', async (req, res, next) => {
  
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) {
      const error = new Error(errorMessages.userNotFound);
      res.status(404);
      throw error;
    }
    
    user.destroy();
  
    res.json({
      user: 'user has been deleted'
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;