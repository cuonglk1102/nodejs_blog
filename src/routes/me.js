const express = require('express');
const router = express.Router();

const meController = require('../app/controllers/MeController');

router.get('/stored/courses', meController.storedcourses);
router.get('/trash/courses', meController.trashcourses);

module.exports = router;
