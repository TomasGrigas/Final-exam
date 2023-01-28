
import { Attendees } from "./pages/Attendees/Attendees";
import { Routes, Route, useNavigate } from 'react-router-dom';
import { Login } from "./pages/Login/Login";
import { PageLayout } from "./components/PageLayout/PageLayout";
import { useState } from "react";


function App() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  const handleLoginSuccess = (user) => {
    setUser(user);
    navigate('/');
  }


  return (
    <div>
        <Routes>
          <Route path="/" element= {<PageLayout user={user} />}>
            <Route index element= {<Attendees/>}/>
          </Route>
          <Route path="/login" element={<Login onSuccess={handleLoginSuccess}/>} />
        </Routes>
    </div>
  );
}

export default App;
