export default function Header() {
  return (
    <header class="flex justify-between items-center h-16 max-w-6xl m-auto py-4 px-6 ">
      <div className="headLogo" class="flex-1">
        <p class="text-[#7B61FF] bg-[#EEEBFF] w-14 h-14 rounded-full text-center py-3	font-semibold text-2xl rotate-[29deg] dark:bg-[#4731D3]">
          G
        </p>
      </div>
      <div className="navbar">
        <nav class="flex flex-1 gap-14 h-14 items-center text-lg text-[#6B7280] px-2">
          <a>Yetenekler</a>
          <a>Projeler</a>
          <a class="border border-[#3730A3] rounded-md w-32 h-12 text-[#3730A3] text-center py-2 font-medium dark:bg-[#FFFFFF]">
            Bana Ulaş
          </a>
        </nav>
      </div>
    </header>
  );
}
