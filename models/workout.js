const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: new Date()
  },
  exercises: [
    {
      type: {
        type: String,
        required: "Enter a type of exercise"
      },
      name: {
        type: String,
        required: "Enter a name of the exercise"
      },
      duration: {
        type: Number,
        required: "How long was your exercise"
      },
      weight: {
        type: Number
      },
      reps: {
        type: Number
      },
      sets: {
        type: Number
      },
      distance: {
        type: Number
      }
    }
  ]
},
  {
    toJSON: {
      virtuals: true
    }
  });

WorkoutSchema.virtual("totalDuration").get(function () {
  return this.exercises.reduce((total, exercise) => {
    return total + exercise.duration;
  }, 0);

});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
