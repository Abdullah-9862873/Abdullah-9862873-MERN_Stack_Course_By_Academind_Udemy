import React, { useState } from "react";

import GoalList from "./components/Goal_List/Goal_List";
import NewGoal from "./components/New_Goal/NewGoal";

import "./App.css";

function App() {
  const [goalsList, setGoalsList] = useState([
    { id: "list1", text: "Finish the Course" },
    { id: "list2", text: "Learn All about the course main topics" },
    { id: "list3", text: "Help other students in course Q and A" },
  ]);

  // The following function will be used to get data from child i-e NewGoals to parent i-e App.js
  const addNewGoalHandler = (newGoal) => {
    // setGoalsList(goalsList.concat(newGoal));

    // Following is a better approach then the above one because using the following will not allow react to defer or delay in case there are multiple stuff going on the app simultaneously, thus making our app work faster

    setGoalsList((prevGoalsList) => {
      return prevGoalsList.concat(newGoal);
    })
  };

  return (
    <div>
      <h1 className="heading">Course Goals</h1>
      <div>
        <NewGoal onAddGoal={addNewGoalHandler} />
        <GoalList goals={goalsList} />
      </div>
    </div>
  );
}

export default App;
