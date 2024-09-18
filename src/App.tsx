import "./App.css";
import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import NoMatch from "./pages/nomatch/NoMatch.tsx";
import { Dashboard } from "./pages/dashboard/Dashboard.tsx";
import Preview from "./pages/preview/Preview.tsx";
import { UserContext } from "./context/UserContext.ts";

function App() {
  const [empresa, setEmpresa] = useState<string>("");
  const [correo, setCorreo] = useState<string>("");

  return (
    <UserContext.Provider value={{empresa, setEmpresa, correo, setCorreo}}>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/preview" element={<Preview />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
