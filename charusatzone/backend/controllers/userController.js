const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const signUp = require('../models/signupmodel');

const signup = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    if (!email || !password || !firstName || !lastName) {
      return res.status(422).json({ error: 'Add all data' });
    }

    const existingUser = await signUp.findOne({ email });

    if (existingUser) {
      throw new Error('User already exists');
    }

    const salt = await bcrypt.genSalt(12);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await signUp.create({
      email,
      password: hashedPassword,
      firstName,
      lastName,
    });

    if (user) {
      res.json(user);
    } else {
      throw new Error('Error occured while creating user');
    }
  } catch (error) {
    console.log(error.message);
    res.json({ error: error.message });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      res.status(422);
      throw new Error('Please add all the details');
    }

    const user = await signUp.findOne({ email });

    if (user && (await bcrypt.compare(password, user.password))) {
      const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
      res.json({
        _id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        token,
      });
    } else {
      throw new Error('Invalid email or password');
    }
  } catch (error) {
    console.log(error.message);
    res.json({ error: error.message });
  }
};

module.exports = { signup, login };
