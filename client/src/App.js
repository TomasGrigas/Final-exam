
import { Attendees } from "./pages/Attendees/Attendees";
import { Routes, Route } from 'react-router-dom';
import { Login } from "./pages/Login/Login";
import { Register } from "./pages/Register/Register";
import { PageLayout } from "./components/PageLayout/PageLayout";
import { UserContextWrapper } from "./contexts/UserContextWrapper";


function App() {

  return (
    <UserContextWrapper>
        <Routes>
          <Route path="/" element= {<PageLayout />}>
            <Route index element= {<Attendees/>}/>
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
    </UserContextWrapper>
  );
}

export default App;
