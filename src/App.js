import logo from "./logo.svg";
import "./App.css";
import {BrowserRounter,Routes,Route} from 'react-router-dom';
import Navigation from "./components/navigation";
import Home from "./pages/home";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Chat from "./pages/chat";
function App() {
  return (
    <BrowserRounter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/chat" element={<Chat/>}/>
      </Routes>
    </BrowserRounter>
  );
}
export default App;