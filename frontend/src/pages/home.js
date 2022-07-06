
import {useEffect,useState  } from "react";

import WorkoutDetails from "../components/workoutDetails";
import WorkoutForm from "../components/workoutForm";

const Home=()=>{

    const[workout,setworkout]=useState(null)

    useEffect(() => {
      const fetchWorkout = async () => {
        const response = await fetch("/api/workouts");
        
        const json = await response.json();

        if (response.ok) {
            setworkout(json)
        }
      };
      fetchWorkout();
    }, []);

    return (
      <div className="home">
        <div className="workouts">
          {workout &&
            workout.map((workout) => (
              <WorkoutDetails key={workout._id} workout={workout} />
            ))}
        </div>
        <WorkoutForm />
      </div>
    );
}

export default Home;