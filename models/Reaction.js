const { Schema, Types } = require('mongoose');

// Define the reaction schema for MongoDB
const reactionSchema = new Schema(
  {
    // Unique identifier for the reaction
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(), // Generate a new ObjectId if not provided
    },
    // The content of the reaction
    reactionBody: {
      type: String,
      required: true,
      maxLength: 280, // Maximum length of the reaction
    },
    // Username of the user who posted the reaction
    username: {
      type: String,
      required: true,
    },
    // Timestamp of when the reaction was created
    createdAt: {
      type: Date,
      default: Date.now, // Default value is the current date and time
      get: timestamp => new Date(timestamp).toLocaleDateString(), // Format the timestamp
    },
  },
  {
    // Include getters for transforming data during serialization
    toJSON: {
      getters: true,
    },
    // Disable the default 'id' field, as we're using reactionId
    id: false,
  }
);

// Export the reaction schema
module.exports = reactionSchema; // Export as 'reactionSchema' instead of 'Reaction' i had originally
