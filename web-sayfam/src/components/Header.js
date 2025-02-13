import { useState } from "react";

export default function Header() {
  let darkModeOpen = "";
  if (localStorage.getItem("darkMode") !== null) {
    darkModeOpen = localStorage.getItem("darkMode");
  }

  const [darkMode, setDarkMode] = useState(darkModeOpen);

  const darkLight = () => {
    setDarkMode(!darkMode);
    document.querySelector("html").classList.toggle("dark", darkMode);
    localStorage.setItem("darkMode", darkMode);
  };

  return (
    <header>
      <div
        className="toggleDark"
        class="max-w-6xl m-auto py-6 flex-row-reverse"
      >
        <img onClick={darkLight} class="h-10" src="./dark-mode.png" />
      </div>
      <div class="flex justify-between items-center h-16 max-w-6xl m-auto py-4 px-6 ">
        <div className="headLogo" class="flex-1">
          <p class="text-[#7B61FF] bg-[#EEEBFF] w-14 h-14 rounded-full text-center py-3	font-semibold text-2xl rotate-[29deg] dark:bg-[#4731D3]">
            G
          </p>
        </div>
        <div className="navbar">
          <nav class="flex flex-1 gap-14 h-14 items-center text-lg text-[#6B7280] px-2">
            <a>Yetenekler</a>
            <a>Projeler</a>
            <a
              href="mailto:gulsu.tuncay@gmail.com"
              class="border border-[#3730A3] rounded-md w-32 h-12 text-[#3730A3] text-center py-2 font-medium dark:bg-[#FFFFFF]"
            >
              Bana Ulaş
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
