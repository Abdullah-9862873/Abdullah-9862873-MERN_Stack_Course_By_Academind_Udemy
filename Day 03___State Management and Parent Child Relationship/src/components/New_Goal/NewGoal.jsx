import React, {useState} from "react";
import "./NewGoal.css"

const NewGoal = props => {
    let [enteredText, setEnteredText] = useState('');

    const eventHandler = event =>{
        event.preventDefault();

        const newGoal = {
            id: Math.random().toString(),
            text: enteredText
        }

        setEnteredText('');

        {props.onAddGoal(newGoal)}
    }

    const inputChangeHandler = (event) => {
        setEnteredText(event.target.value);
    }

    return (
        <form className="new-goal" onSubmit={eventHandler}>
            <input type="text" value={enteredText} onChange={inputChangeHandler}/>
            <button type="submit">Add Goal</button>
        </form>
    );
}

export default NewGoal;
