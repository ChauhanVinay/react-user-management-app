import "./UsersList.css";
import Card from "../UI/Card";

const UsersList = (props) => {
  return (
    //Enclose the unordered list inside the custom Card component
    <Card className="users">
      {/* Return an unordered list */}
      <ul>
      {/* Map over the users array extracted from props */}
        {props.users.map((user) => (
            <li key={user.id || Math.random().toString()}>
            {user.name} ({user.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;
