// Set up a router instance
const router = require('express').Router();
// Import the routes for user and thought resources
const userRoutes = require('./user-routes');
const thoughtRoutes = require('./thought-routes');
// Establish endpoints for user and thought routes
router.use('/users', userRoutes);
router.use('/thoughts', thoughtRoutes);
// Export the configured router for use in the application
module.exports = router;
