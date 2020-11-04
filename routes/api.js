const router = require("express").Router();
const db = require("../models");


//GET route for "/api/workouts"
router.get("/api/workouts", (req, res) => {
  db.Workout.find({})
  .then(dbWorkout => {
    res.json(dbWorkout);
  })
  .catch(err => {
    res.status(400).json(err);
  });
  });

//PUT route for "/api/workouts/:id"
router.put("/api/workouts/:id", ({body, params}, res) => {
  console.log("HELLOOOOOOOOOOOOOOOOOOOOO")
  console.log(params.id)
  db.Workout.findByIdAndUpdate(
    
      params.id,
      {$push: {exercises: body}},
      { new: true, runValidators: true}).then(dbWorkout => {
          res.json(dbWorkout);
          console.log("Goodbyeeeeeeeeeeeeeee")
      }).catch(err => {
        res.status(400).json(err);
      });
    });


//POST route for "/api/workouts"
router.post("/api/workouts", (req, res) => {
  db.Workout.find({})
  .then(dbWorkout => {
    res.json(dbWorkout);
  })
  .catch(err => {
    res.status(400).json(err);
  });
  });


//GET route for "/api/workouts/range"
router.get("/api/workouts/range", (req, res) => {
  db.Workout.find({})
  .then(dbWorkout => {
    res.json(dbWorkout);
  })
  .catch(err => {
    res.status(400).json(err);
  });
  });

//POST route for "/api/workouts/range"
 router.post("/api/workouts/range", (req, res) => {
    db.Workout.find({})
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });  

module.exports = router;
