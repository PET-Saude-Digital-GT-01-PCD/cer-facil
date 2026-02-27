import { useState } from "react";
import "./index.css";
import Home from "./pages/home/components/Home";

export function App() {
  const [showForm, setShowForm] = useState(false);
  const [showFlow, setShowFlow] = useState(false);

  return (
    <>
      <Home
        showForm={showForm}
        setShowForm={setShowForm}
        showFlow={showFlow}
        setShowFlow={setShowFlow}
      />
    </>
  );
}
