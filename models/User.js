// Import required dependencies from the mongoose library
const { Schema, model, Types } = require('mongoose');

// Define the User schema for MongoDB
const userSchema = new Schema(
  {
    // User's username
    username: {
      type: String,
      required: true,
      unique: true, // Username should be unique
      trim: true, // Trim any whitespace around the username
    },
    // User's email
    email: {
      type: String,
      required: true,
      unique: true, // Email should be unique
      validate: {
        // Validate email format using a regular expression
        validator: function(v) {
          return /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(v);
        },
      },
    },
    // Array of friends' ObjectId references
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User', // Reference the 'User' model
      },
    ],
    // Array of thoughts' ObjectId references
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Thought', // Reference the 'Thought' model
      },
    ],
  },
  {
    // Include virtuals when transforming data to JSON
    toJSON: {
      virtuals: true,
    },
    // Disable the default 'id' field in JSON output
    id: false,
  }
);

// Define a virtual field 'friendCount' to calculate the number of friends
userSchema.virtual('friendCount').get(function() {
  return this.friends.length;
});

// Create the 'User' model from the userSchema
const User = model('User', userSchema);

// Export the 'User' model as a module
module.exports = User;
