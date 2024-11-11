import "./App.css";

import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import ContactsPage from "./pages/ContactsPage/ContactsPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegistrationPage.jsx />} />
        <Route path="/login" element={<LoginPage.jsx />} />
        <Route path="/contacts" element={<ContactsPage.jsx />} />
      </Routes>
    </div>
  );
}

export default App;
