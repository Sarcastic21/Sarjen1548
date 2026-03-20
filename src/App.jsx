import { Routes, Route } from "react-router-dom";
import { Home, About, Contact } from "./Home.jsx";
import LifeCycle from "./LifeCycle.jsx";
import StateDemo from "./StateDemo.jsx";
import StateDemo2 from "./StateDemo2.jsx";
import StateLocalDemo from "./StateLocalDemo.jsx";
import EventDemo from "./EventDemo.jsx"
import Signup from './Signup'
import Login from './Login'
import Forgot from './Forgot'
import Profile from './Profile'
import Navbar from './Navbar'
import Todo from './ToDo.jsx'


function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/lifecycle" element={<LifeCycle />} /> 
        <Route path="/state1" element={<StateDemo />} />
        <Route path="/state2" element={<StateDemo2 />} />
        <Route path="/statelocal" element={<StateLocalDemo />} />
        <Route path="/Event" element={<EventDemo />} />

        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot" element={<Forgot />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/todo" element={<Todo />} />

      </Routes>
    </>
  );
}

export default App;