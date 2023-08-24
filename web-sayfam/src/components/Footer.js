export default function Footer() {
  return (
    <footer class="bg-[#F9F9F9] h-96 dark:bg-[#141414]">
      <div className="footerbox" class="flex gap-36 max-w-6xl px-4 m-auto">
        <div className="footerleft" class="flex flex-col flex-1 ">
          <p class="text-4xl font-bold flex-1 py-12 dark:text-[#AEBCCF]">
            Bir sonraki ürününüz için birlikte çalışalım!
          </p>
          <a
            href="mailto:gulsu.tuncay@gmail.com"
            class="text-[#AF0C48] text-xl font-semibold flex-1 dark:text-[#BAB2E7]"
          >
            👉 gulsu.tuncay@gmail.com
          </a>
        </div>
        <div
          className="footerright"
          class="text-lg font-semibold flex gap-8 flex-1 justify-end items-end px-1"
        >
          <p class="text-[#0A0A14] dark:text-[#E1E1FF]">Kişisel Blog</p>
          <a
            href="https://github.com/gulsute"
            class="text-[#00AB6B]  dark:text-[#17D18B]"
          >
            Github
          </a>
          <a
            href="https://www.linkedin.com/in/g%C3%BClsu-tuncay-b86961194/"
            class="text-[#0077B5]  dark:text-[#0BA6F6]"
          >
            Linkedin
          </a>
        </div>
      </div>
    </footer>
  );
}
