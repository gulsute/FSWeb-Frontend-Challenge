import "./profile.css";

export default function Profile() {
  return (
    <div>
      <h2>Profil</h2>
      <div className="profilebox">
        <div className="profile">
          <h3>Profil</h3>
          <div className="profileinfo">
            <div className="questions" class="font-bold">
              <p>Doğum tarihi</p>
              <p>İkamet Şehri</p>
              <p>Eğitim Durumu</p>
              <p>Tercih Ettiği Rol</p>
            </div>
            <div className="answers">
              <p>25.05.1993</p>
              <p>Eskişehir</p>
              <p>Boğaziçi Üni. İşletme Lisans 2017 </p>
              <p>Frontend, UI-UX</p>
            </div>
          </div>
        </div>
        <div className="about">
          <h3>Hakkımda</h3>
          <p>
            Üniversite yıllarında tasarım anlamında edindiğim beceriler ve 5+
            yıllık kurumsal hayatımda edindiğim tecrübelerle paydaşlarımın
            ihtiyaçlarını en iyi şekilde anlayarak onlara en uygun çözümleri
            doğru zaman içerisinde sağlamak için çalışıyorum.
          </p>
        </div>
      </div>
    </div>
  );
}
