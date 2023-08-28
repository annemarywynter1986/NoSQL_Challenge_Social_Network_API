const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');

// Define the thought schema for MongoDB
const thoughtSchema = new Schema(
  {
    // The content of the thought
    thoughtText: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 280, // Maximum length of the thought
    },
    // Timestamp of when the thought was created
    createdAt: {
      type: Date,
      default: Date.now, // Default value is the current date and time
      get: timestamp => new Date(timestamp).toLocaleString(), // Format the timestamp
    },
    // Username of the user who posted the thought
    username: {
      type: String,
      required: true,
    },
    // Array to store reactions associated with the thought
    reactions: [reactionSchema], // Using the reaction schema defined elsewhere
  },
  {
    // Include getters for transforming data during serialization
    toJSON: {
      getters: true,
      virtuals: true, // Include virtual fields in serialized output
    },
    // Disable the default 'id' field, as we're using MongoDB's _id
    id: false,
  }
);

// Define a virtual field to calculate the number of reactions for the thought
thoughtSchema.virtual('reactionCount').get(function () {
  return this.reactions.length;
});

// Create a model named 'Thought' using the thought schema
const Thought = model('Thought', thoughtSchema);

// Export the Thought model
module.exports = Thought;
