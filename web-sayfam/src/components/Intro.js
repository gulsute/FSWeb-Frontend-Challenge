import "./intro.css";

export default function Intro() {
  return (
    <div className="introbox">
      <div className="introtext">
        <div class="flex my-4">
          <div class="line-through w-20 decoration-[#3730A3] dark:decoration-[#BAB2E7]">
            {" "}
            ---------
          </div>
          <span class="text-[#4338CA] font-medium dark:text-[#B7AAFF]">
            {" "}
            Gülsu Tuncay Erol
          </span>
        </div>
        <div className="headline">
          <h1 className="font-bold text-7xl dark:text-[#AEBCCF]">
            Minimalizm ve{" "}
          </h1>{" "}
          <h1 className="font-bold text-7xl dark:text-[#AEBCCF]">
            {" "}
            Çözüm Odaklı
          </h1>
        </div>
        <p class="dark:text-[#FFFFFF]">
          10 yıldır görsel tasarımla ilgileniyor ve websitesi tasarlama
          deneyimimi problem çözme becerimi de merkeze alarak gittikçe
          genişletiyorum. Müşterileriniz ve sizin için fonksiyonel, kullanıcı
          deneyimini önemseyen, minimalist tasarımlar için benimle çalışmak
          ister misiniz?
        </p>
        <div className="introbuttons">
          <button class="bg-blue text-white dark:bg-[#E1E1FF] dark:text-[#000000]">
            Bana ulaş
          </button>
          <button class="mx-3 dark:bg-[#383838] dark:border-[#E1E1FF] dark:text-[#E1E1FF]">
            Github
          </button>
          <button class=" dark:bg-[#383838] dark:border-[#E1E1FF] dark:text-[#E1E1FF]">
            Linkedin
          </button>
        </div>
      </div>
      <div className="introfoto ">
        <img class="rounded-2xl shadow-lg" src="./gulsufoto.jpg" alt="image" />
      </div>
    </div>
  );
}
