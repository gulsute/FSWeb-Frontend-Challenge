export default function Header() {
  return (
    <div className="header" class="flex justify-between h-16">
      <div className="headLogo">
        <p class="text-[#7B61FF]">G</p>
      </div>

      <nav class="flex flex-1">
        <a>Yetenekler</a>
        <a>Projeler</a>
        <a>Bana Ulaş</a>
      </nav>
    </div>
  );
}
