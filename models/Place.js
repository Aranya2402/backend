const mongoose = require('mongoose');

const placeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  location: {
    latitude: { type: Number, required: true },
    longitude: { type: Number, required: true },
  },
  category: { type: String, required: true },
  address: { type: String, required: true },
  images: [{ type: String }],
  rating: { type: Number, default: 0 },
  country: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Place', placeSchema);
