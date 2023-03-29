import asyncHandler from 'express-async-handler';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import User from '../models/userModel.js';

// @desc Register the user
// @route POST /api/users
// @access Public
export const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  // If any field is empty
  if (!name || !email || !password) {
    res.status(400);
    throw new Error('Please fill all the fields');
  }

  const userExist = await User.findOne({ email });

  // If user already exists
  if (userExist) {
    res.status(400);
    throw new Error('User already exists');
  }

  // Password Hashing
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // Create User
  const user = await User.create({
    name,
    email,
    password: hashedPassword,
  });

  // If User is created
  if (user) {
    res.status(201).json({
      // Res 201 means created
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error('Invalid user data');
  }
});

// @desc Authenticate a user
// @route POST /api/users/login
// @access Public
export const loginUser = asyncHandler(async (req, res) => {
  // Get input
  const { email, password } = req.body;

  // Find user based on input
  const user = await User.findOne({ email });

  // Check if user exists and compare if password and email is correct
  if (user && (await bcrypt.compare(password, user.password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error('There is no account with those credentials');
  }
});

// @desc Get currently logged in user data
// @route GET /api/users/me
// @access Private
export const getCurrentUser = asyncHandler(async (req, res) => {
  const {_id, name, email} = await User.findById(req.user._id);
  res.status(200).json({
    id: _id,
    name,
    email
  })
});

// Generate JWT
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  });
};
