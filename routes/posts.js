const express = require('express');
const router = express.Router();
const postsController = require('../controllers/postsController');

// POST → crea un nuovo post
router.post('/', postsController.store);

// PATCH → aggiorna un post esistente
router.patch('/:id', postsController.update);

module.exports = router;
