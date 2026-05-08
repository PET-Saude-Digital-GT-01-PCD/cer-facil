import { useState } from "react";
import "./index.css";
import Home from "./pages/home/components/Home";
import BackToTopButton from "./components/back-to-top-buttom/BackToTopButtom";
import VLibras from "@/components/vlibras/Vlibras";
export function App() {
  const [showForm, setShowForm] = useState(false);
  const [showFlow, setShowFlow] = useState<[boolean, number | null]>([
    false,
    null,
  ]);

  return (
    <>
      <VLibras />
      <Home
        showForm={showForm}
        setShowForm={setShowForm}
        showFlow={showFlow}
        setShowFlow={setShowFlow}
      />
      {!showForm && !showFlow[0] && <BackToTopButton />}
    </>
  );
}
