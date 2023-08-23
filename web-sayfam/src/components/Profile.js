import "./profile.css";

export default function Profile() {
  return (
    <div>
      <h2 class="dark:text-[#AEBCCF]">Profil</h2>
      <div className="profilebox">
        <div className="profile">
          <h3 class="dark:text-[#B7AAFF]">Profil</h3>
          <div className="profileinfo">
            <div className="questions" class="font-bold dark:text-[#FFFFFF]">
              <p>Doğum tarihi</p>
              <p>İkamet Şehri</p>
              <p>Eğitim Durumu</p>
              <p>Tercih Ettiği Rol</p>
            </div>
            <div className="answers" class=" dark:text-[#FFFFFF]">
              <p>25.05.1993</p>
              <p>Eskişehir</p>
              <p>Boğaziçi Üni. İşletme Lisans 2017 </p>
              <p>Frontend, UI-UX</p>
            </div>
          </div>
        </div>
        <div className="about">
          <h3 class="dark:text-[#B7AAFF]">Hakkımda</h3>
          <p class=" dark:text-[#FFFFFF]">
            Üniversite yıllarında tasarım anlamında edindiğim beceriler ve 5+
            yıllık kurumsal hayatımda kazandığım tecrübelerle paydaşlarımın
            ihtiyaçlarını en iyi şekilde anlayarak onlara en uygun çözümleri
            doğru zaman içerisinde sağlamak için çalışıyorum.
          </p>
        </div>
      </div>
    </div>
  );
}
