// Create web server
const express = require('express');
const router = express.Router();

// Require controller modules
const comment_controller = require('../controllers/commentController');

// GET comments home page
router.get('/', comment_controller.index);

// GET request for creating a comment
router.get('/create', comment_controller.comment_create_get);

// POST request for creating a comment
router.post('/create', comment_controller.comment_create_post);

// GET request for deleting a comment
router.get('/:id/delete', comment_controller.comment_delete_get);

// POST request for deleting a comment
router.post('/:id/delete', comment_controller.comment_delete_post);

// GET request for updating a comment
router.get('/:id/update', comment_controller.comment_update_get);

// POST request for updating a comment
router.post('/:id/update', comment_controller.comment_update_post);

// GET request for one comment
router.get('/:id', comment_controller.comment_detail);

module.exports = router;

