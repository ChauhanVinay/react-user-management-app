import "./App.css";
import AddUser from "./components/Users/AddUser";
// import Form from "./Form";

export default function App() {
  return (
    <div className="App">
      <h1>React Form Example</h1>
      {/* <Form /> */}
      <AddUser />
    </div>
  );
}