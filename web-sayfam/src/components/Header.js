export default function Header() {
  return (
    <header class="flex h-16 max-w-5xl m-auto py-12 gap-20">
      <div className="headLogo">
        <p class="text-[#7B61FF]">G</p>
      </div>

      <nav class="flex flex-1 gap-4">
        <a>Yetenekler</a>
        <a>Projeler</a>
        <a>Bana Ulaş</a>
      </nav>
    </header>
  );
}
