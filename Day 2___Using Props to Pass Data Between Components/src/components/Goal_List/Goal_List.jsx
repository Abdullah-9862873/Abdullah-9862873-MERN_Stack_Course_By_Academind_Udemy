import React from "react";
import "./Goal_List.css";

const Goal_List = (props) => {
  return (
    <ul className="list">
      {props.goals.map((goal) => {
        return <li key={goal.id} className={goal.id}>{goal.text}</li>
      })}
    </ul>
  );
};

export default Goal_List;
