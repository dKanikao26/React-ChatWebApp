import { Routes, Route, Navigate } from "react-router-dom";
import Chat from "./pages/chat";
import Login from "./pages/login";
import Register from "./pages/register";
import NavBar from "./componenets/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from "react-bootstrap";
import { useContext } from "react";
import { AuthContext } from "./context/authContext";
// route map component that will be renderes to the url 
function App() {
  const {user} = useContext(AuthContext);
  return (
    <>
    <NavBar/>
    <Container className="text-secondary">
      <Routes>
        
        <Route path="/" element={ user ?<Chat /> : <Login/>} /> 
        <Route path="/login" element={ user ? <Chat/> :<Login />} />
        <Route path="/register" element={user ?<Chat/>:<Register />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Container>
    </>
  );
}

export default App;
