
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";
// import Form from "./Form";

export default function App() {
  return (
    <div>
      <h1>React Form</h1>
      {/* <Form /> */}
      <AddUser />
      <UsersList users={[]} />
    </div>
  );
}
