
import {useEffect,useState  } from "react";



const Home=()=>{

    const[workout,setworkout]=useState(null)

    useEffect(() => {
      const fetchWorkout = async () => {
        const response = await fetch("http://localhost:4200/api/workouts");
        
        const json = await response.json();

        if (response.ok) {
            setworkout(json)
        }
      };
      fetchWorkout();
    }, []);

    return(
        <div className="home">

            <div className="workouts">

            {workout && workout.map((workout)=>(
             
             <p key={workout._id}>{workout.title}</p>
            ))}

            </div>
        </div>
    )
}

export default Home;