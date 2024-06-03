import "./App.css"
import GoalList from "./components/Goal_List/Goal_List";

function App() {

  const goalsList = [
    {id: 'list1', text: "Finish the Course"},
    {id: 'list2', text: "Learn All about the course main topics"},
    {id: 'list3', text: "Help other students in course Q and A"}
  ]

  return (
    <div>
      <h1 className="heading">Course Goals</h1>
      <GoalList goals = {goalsList}/>
    </div>
  );
}

export default App;
