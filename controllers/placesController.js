const Place = require('../models/Place');

// Get all places
const getAllPlaces = async (req, res) => {
  try {
    const places = await Place.find();
    res.status(200).json(places);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching places', error });
  }
};

// Get place by ID
const getPlaceById = async (req, res) => {
  const { id } = req.params;
  try {
    const place = await Place.findById(id);
    if (!place) {
      return res.status(404).json({ message: 'Place not found' });
    }
    res.status(200).json(place);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching place', error });
  }
};

// Add a new place
const createPlace = async (req, res) => {
  const { name, description, location, category, address, images, rating, country } = req.body;
  try {
    const newPlace = new Place({ name, description, location, category, address, images, rating, country });
    await newPlace.save();
    res.status(201).json(newPlace);
  } catch (error) {
    res.status(500).json({ message: 'Error creating place', error });
  }
};

module.exports = { getAllPlaces, getPlaceById, createPlace };
