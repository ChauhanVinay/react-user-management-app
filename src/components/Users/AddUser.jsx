import './AddUser.css';
import Card from '../UI/Card';
import Button from '../UI/Button';
import { useState } from 'react';

const AddUser = () => {
  //1:separate useState Hooks for collecting user inputs
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  //
  const usernameHandler = (event) => {
    setEnteredUsername(event.target.value);
  }

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  }


  const addUserHandler = (event) => {
    event.preventDefault(); 
    
    if(enteredUsername.trim().length === 0 || enteredAge.trim() === 0){
      return;
    }

    console.log(enteredUsername, enteredAge);

    setEnteredUsername("");
    setEnteredAge("");
  };

    return (
        <Card className="input">
        <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
                <input type="text" id="username" value={enteredUsername} onChange={usernameHandler} />

                <label htmlFor="age">Age:</label>
                <input type="number" id="age" value={enteredAge} onChange={ageChangeHandler} />

            <Button type="submit">Add User</Button>
        </form>
        </Card>
    );
};

export default AddUser;