const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now
  },
  exercise:[{
  type: {
    type: String,
    trim: true,
    required: "Enter type of exercise either resistance or cardio"
  },
  name: {
    type: String,
    trim: true,
    required: "enter name of exercise"
  },
  duration:{
    type:Number,
    required:"Enter minutes for exercise"
  }, 
  weight:{
    type: Number
  },
  reps:{
    type:Number
  },
  sets:{
    type:Number
  },
  distance:{
    type:Number
  }

}]
});

const Workout= mongoose.model("Workout", workoutSchema);

module.exports = Workout;

