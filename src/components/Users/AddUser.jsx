

const AddUser = () => {
  const addUserHandler = (event) => {
    event.preventDefault();

    console.log("Form Submitted");
    
  }

    return (
        <form onSubmit={addUserHandler}>
            <div>
                <label htmlFor="username">User Name:</label>
                <input type="text" id="username" />
            </div>
            <div>
                <label htmlFor="age">Age:</label>
                <input type="number" id="age" />
            </div>
            <button type="submit">Add User</button>
        </form>
    );
}

export default AddUser;