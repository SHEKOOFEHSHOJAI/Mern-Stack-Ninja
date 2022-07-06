const { useState } = require("react")

const WorkoutForm=()=>{


    const[ title,setTitle]=useState('');
    const [load,setLoad] = useState('');
    const [reps,setReps] = useState('');
    const [error,setError] = useState(null);

    const handelSubmit=async(e)=>{

    e.preventDefault()
    const workout={title,load,reps};
    const response=await fetch('/api/workouts',{
        method:"POST",
        body:JSON.stringify(workout),
        headers:{
            headers:{
                'content-type':'application/json'
            }
        }
    })
    const json=await response.json()

    if(!response.ok){

        setError(json.error)

    }
    if(response.ok){
        setTitle("");
        setLoad('')
        setReps('')
     setError(null)
     console.log("new workout added",json);
    }

    }

    return (
      <form action="" className="create" onSubmit={handelSubmit}>
        <h3>Add a New Workout</h3>
        <label>Excersize Title:</label>

        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />

        <label>load (in kg )</label>
        <input
          type="number"
          onChange={(e) => setLoad(e.target.value)}
          value={load}
        />

        <label>Reps:</label>
        <input
          type="number"
          onChange={(e) => setReps(e.target.value)}
          value={load}
        />
        <button> Add workout</button>
        {error && <div className="error">{error}</div>}
      </form>
    );
}

export default WorkoutForm;