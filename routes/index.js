const express = require('express');
const router = express.Router();

// Import API routes
const apiRoutes = require('./api-routes');

// Route for handling API requests
router.use('/api', apiRoutes);

// Route for handling undefined routes (404 Not Found)
router.use((req, res) => {
    return res.status(404).send('Not found');
});

module.exports = router;
