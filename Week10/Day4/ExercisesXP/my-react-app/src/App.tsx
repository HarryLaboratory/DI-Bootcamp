import Greeting from "./components/Greeting";
import Counter from "./components/Counter";
import UserCard from "./components/UserCard";
import UserList from "./components/UserList";
import './App.css';

function App() {
  return (
    <div className="App">
      <Greeting name="John Doe" messageCount={5} />
      <Counter />
      <UserCard name="Alice" age={25} role="Admin" />
      <UserCard name="Bob" />
      <UserList />
    </div>
  );
}

export default App;

