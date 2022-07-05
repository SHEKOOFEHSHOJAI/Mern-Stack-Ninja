const workoutDetails=({workout})=>{
    return (
      <div className="workout-detaails">
        <h4>{workout.title}</h4>
        <p>
          <strong>Load(kg):</strong>
          {workout.load}
        </p>
        <p>
          <strong>Reps:</strong>
          {workout.reps}
        </p>

        <p>
          {workout.createdAt}
        </p>
      </div>
    );
}

export default workoutDetails;