export default function Footer() {
  return (
    <div className="footer" class="bg-[#F9F9F9] h-96">
      <div className="footerbox" class="flex gap-36 max-w-5xl m-auto">
        <div className="footerleft" class="flex flex-col flex-1 ">
          <p class="text-4xl font-bold flex-1 py-12">
            Bir sonraki ürününüz için birlikte çalışalım!
          </p>
          <p class="text-[#AF0C48] text-xl font-semibold flex-1">
            👉 gulsu.tuncay@gmail.com
          </p>
        </div>
        <div
          className="footerright"
          class="text-lg font-semibold flex gap-8 flex-1 justify-end items-end px-1"
        >
          <p class="text-[#0A0A14]">Kişisel Blog</p>
          <p class="text-[#00AB6B]">Github</p>
          <p class="text-[#0077B5]">Linkedin</p>
        </div>
      </div>
    </div>
  );
}
