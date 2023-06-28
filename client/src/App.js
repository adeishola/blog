import Home from "./pages/home/Home";
import TopBar from "./components/topbar/TopBar";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { Route, Routes } from "react-router-dom";
import { Context } from "./context/Context";
import { useContext } from "react";

function App() {
  const { user } = useContext(Context);
  return (
    <>
    <TopBar />
    <Routes>
        <Route exact path="/" element={<Home />} />
        {!user && <Route path="/register" element={<Register />} />}
        {!user && <Route path="/login" element={<Login />} />} 
        {user && <Route path="/write" element={<Write />} />}
        {user && <Route path="/settings" element={<Settings />} />}
        <Route path="/post/:postId" element={<Single />} />  
    </Routes>
    </>
  );
}

export default App;
