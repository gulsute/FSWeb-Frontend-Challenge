import "./profile.css";

export default function Profile() {
  return (
    <div>
      <h2>Profile</h2>
      <div className="profilebox">
        <div className="profile">
          <h3>Profile</h3>
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
          <h3>About Me</h3>
          <p>falanlar filanlar Lorem ipsum dolor sit amet</p>
        </div>
      </div>
    </div>
  );
}
