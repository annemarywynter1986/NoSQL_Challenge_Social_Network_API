const { User } = require('../models');

const UserController = {
  // Get all users
  getAllUsers(req, res) {
    User.find({})
      .then(userData => res.json(userData))
      .catch(err => res.status(500).json(err));
  },

  // Get a user by ID
  getUserById(req, res) {
    User.findById(req.params.userId)
      .then(userData => res.json(userData))
      .catch(err => res.status(500).json(err));
  },
  
  // Create a new user
  createUser(req, res) {
    User.create(req.body)
      .then(userData => res.json(userData))
      .catch(err => res.status(500).json(err));
  },

  // Update a user by ID
  updateUserById(req, res) {
    User.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
      .then(userData => {
        if (!userData) {
          return res.status(404).json({ message: 'Not found' });
        }
        res.json(userData);
      })
      .catch(err => res.status(500).json(err));
  },

  // Delete a user by ID
  deleteUserById(req, res) {
    User.findOneAndDelete({ _id: req.params.id })
      .then(userData => {
        if (!userData) {
          return res.status(404).json({ message: 'Not found' });
        }
        res.json({ message: 'User deleted successfully' });
      })
      .catch(err => res.status(500).json(err));
  },

  // Add a friend to a user's friend list
  addFriend(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $addToSet: { friends: req.body.friendId || req.params.friendId } },
      { new: true }
    )
      .then(userData => {
        if (!userData) {
          return res.status(404).json({ message: 'Not found' });
        }
        res.json(userData);
      })
      .catch(err => res.status(500).json(err));
  },

  // Remove a friend from a user's friend list
  removeFriend(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $pull: { friends: req.params.friendId } },
      { new: true }
    )
      .then(dbUserData => {
        if (!dbUserData) {
          return res.status(404).json({ message: "No user with such ID" });
        }
        const removed = !dbUserData.friends.includes(req.params.friendId);
        if (removed) {
          res.json({ message: "Friend removed!", user: dbUserData });
        } else {
          res.json(dbUserData);
        }
      })
      .catch(err => res.status(400).json(err));
  },
};

// Export UserController
module.exports = UserController;
