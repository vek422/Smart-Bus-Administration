import mongoose from "mongoose";

const CitySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});
const RouteSchema = new mongoose.Schema(
  {
    startCity: {
      type: CitySchema,
      required: true,
    },
    destinationCity: {
      type: CitySchema,
      required: true,
    },
    distance: {
      type: Number,
      required: true,
    },
    citiesInRoute: {
      type: [CitySchema],
      required: true,
    },
  },
  { timestamps: true }
);

const Route = mongoose.model("Route", RouteSchema);
