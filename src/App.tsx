import { useState } from "react";
import "./index.css";
import Home from "./pages/home/components/Home";
import BackToTopButton from "./components/back-to-top-buttom/BackToTopButtom";
import VLibras from "@djpfs/react-vlibras";

export function App() {
  const [showForm, setShowForm] = useState(false);
  const [showFlow, setShowFlow] = useState<[boolean, number | null]>([
    false,
    null,
  ]);

  return (
    <>
      <VLibras forceOnload={true} />
      <Home
        showForm={showForm}
        setShowForm={setShowForm}
        showFlow={showFlow}
        setShowFlow={setShowFlow}
      />
      <BackToTopButton />
    </>
  );
}
