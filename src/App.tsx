import { useState } from "react";
import "./index.css";
import Home from "./pages/home/components/Home";
import { Navbar } from "./components/navbar/Navbar";

export function App() {
  const [showForm, setShowForm] = useState(false);
  const [showFlow, setShowFlow] = useState(false);

  return (
    <>
      {!showForm && <Navbar />}
      <Home
        showForm={showForm}
        setShowForm={setShowForm}
        showFlow={showFlow}
        setShowFlow={setShowFlow}
      />
    </>
  );
}
