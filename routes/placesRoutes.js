const express = require('express');
const { getAllPlaces, getPlaceById, createPlace } = require('../controllers/placesController');

const router = express.Router();

router.get('/', getAllPlaces);
router.get('/:id', getPlaceById);
router.post('/', createPlace);

module.exports = router;
