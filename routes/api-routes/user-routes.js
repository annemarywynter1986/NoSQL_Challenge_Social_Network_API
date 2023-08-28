const express = require('express');
const router = express.Router();

const {
  getAllUsers,
  getUserById,
  createUser,
  updateUserById,
  deleteUserById,
  addFriend,
  removeFriend,
} = require('../../controllers/user-controller');

// Routes for managing users
router.route('/')
  .get(getAllUsers) // Retrieve all users
  .post(createUser); // Create a new user

router.route('/:userId')
  .get(getUserById) // Retrieve user by ID
  .put(updateUserById) // Update user by ID
  .delete(deleteUserById); // Delete user by ID

router.route('/:userId/friends/:friendId')
  .post(addFriend) // Add a friend to the user's list
  .delete(removeFriend); // Remove a friend from the user's list

module.exports = router;
