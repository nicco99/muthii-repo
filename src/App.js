import {Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Form from "./components/Form";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/addnew" element={<Form />} />
    </Routes>
  );
}

export default App;
