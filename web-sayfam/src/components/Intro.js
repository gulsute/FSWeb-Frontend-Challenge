import "./intro.css";

export default function Intro() {
  return (
    <div className="introbox">
      <div className="introtext">
        <div class="flex my-4">
          <div class="line-through w-20 decoration-[#3730A3]"> ---------</div>
          <span class="text-[#4338CA] font-medium "> Gülsu Tuncay Erol</span>
        </div>
        <div className="headline">
          <h1 className="font-bold text-7xl">Minimalizm ve </h1>{" "}
          <h1 className="font-bold text-7xl"> Çözüm Odaklı</h1>
        </div>
        <p>
          10 yıldır görsel tasarımla ilgileniyor ve websitesi tasarlama
          deneyimimi problem çözme becerimi de merkeze alarak gittikçe
          genişletiyorum. Müşterileriniz ve sizin için fonksiyonel, kullanıcı
          deneyimini önemseyen, minimalist tasarımlar için benimle çalışmak
          ister misiniz?
        </p>
        <div className="introbuttons">
          <button class="bg-blue text-white">Bana ulaş</button>
          <button class="mx-3">Github</button>
          <button>Linkedin</button>
        </div>
      </div>
      <div className="introfoto ">
        <img src="./gulsufoto.jpg" alt="image" />
      </div>
    </div>
  );
}
