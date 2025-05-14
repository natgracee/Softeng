import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Notfound } from "./pages/notfound";
import { Home } from "./pages/home";
import { Register } from "./pages/Register";
import { Login } from "./pages/Login";
import { Main } from "./pages/Main";
import { Notification } from "./pages/Notification";
import { Account } from "./pages/Account";
import { Grouplist } from "./pages/Grouplist";
import { Newgroup } from "./pages/Newgroup";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Notfound />} />
        <Route path="/main" element={<Main username="Name" />} />
        <Route path="/notification" element={<Notification />} />
        <Route path="/account" element={<Account />} />
        <Route path="/grouplist" element={<Grouplist />} />
        <Route path="/newgroup" element={<Newgroup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
