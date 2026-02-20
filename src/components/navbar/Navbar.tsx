import { useEffect, useState } from "react";

const scrollToNetworkInfo = () => {
  const element = document.getElementById("network-info");
  if (element) {
    const navbarHeight = 64; // altura da navbar (h-16)
    const elementPosition = element.offsetTop - navbarHeight;
    window.scrollTo({
      top: elementPosition,
      behavior: "smooth",
    });
  }
};

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

export function Navbar() {
  const [showInicio, setShowInicio] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const welcomeHeight = window.innerHeight;
      setShowInicio(window.scrollY > welcomeHeight * 0.5);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-border bg-background shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-semibold">CER Fácil</h1>
          </div>
          <div className="flex items-center space-x-4">
            <div
              onClick={scrollToTop}
              className={`text-foreground hover:text-foreground px-3 py-2 rounded-md text-base font-medium cursor-pointer select-none transition-opacity duration-300 ${showInicio ? "opacity-100" : "opacity-0 pointer-events-none"}`}
            >
              Início
            </div>
            <div
              onClick={scrollToNetworkInfo}
              className="text-foreground hover:text-foreground px-3 py-2 rounded-md text-base font-medium cursor-pointer select-none"
            >
              Saber Mais
            </div>
            <a
              href="#"
              className="text-foreground hover:text-foreground px-3 py-2 rounded-md text-base font-medium cursor-pointer select-none"
            >
              Contato
            </a>
            <a
              href="#"
              className="text-foreground hover:text-foreground px-3 py-2 rounded-md text-base font-medium cursor-pointer select-none"
            >
              Sobre
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
