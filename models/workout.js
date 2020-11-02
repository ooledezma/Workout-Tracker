const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now
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

workoutSchema.virtual("totalDuration").get(function(){
  return this.exercises.reduce((total, exercise)=>{
      return total + exercise.duration;
  }, 0);

});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
