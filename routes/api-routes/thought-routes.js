const express = require('express');
const router = express.Router();

const {
  getAllThoughts,
  getThoughtsById,
  createThought,
  updateThoughtById,
  deleteThought,
  createReaction,
  deleteReaction,
} = require('../../controllers/thought-controller');

// Routes for managing Thoughts
router.route('/')
  .get(getAllThoughts)       // Get all thoughts
  .post(createThought);      // Create a new thought

router.route('/:thoughtId')
  .get(getThoughtsById)      // Get a thought by ID
  .put(updateThoughtById)    // Update a thought by ID
  .delete(deleteThought);    // Delete a thought by ID

router.route('/:thoughtId/reactions')
  .post(createReaction);     // Create a new reaction for a thought

router.route('/:thoughtId/reactions/:reactionId')
  .delete(deleteReaction);   // Delete a reaction from a thought

module.exports = router;
