import "./skills.css";

export default function Skills() {
  return (
    <div className="skillsbox" class="my-8">
      <h2>Yetenekler</h2>
      <div className="skills">
        <div className="skill">
          <h3>Javascript</h3>
          <p>
            Websiteleriniz ve uygulamalarınızda ihtiyacınız olacak algoritma
            kurulumunu pratik çözümler ve doğru sonuçlar için kullanabilirim.
          </p>
        </div>
        <div className="skill">
          <h3>CSS</h3>
          <p>
            Tasarım mükemmelliğini doğru gözle birleştirerek kullanıcılar için
            kolaylığı ve fonksiyonelliği bir arada sunabilirim.
          </p>
        </div>
        <div className="skill">
          <h3>Redux</h3>
          <p>
            Son yılların gözde yazılım dili olan React ve fonksiyonelliği
            artırılarak elde edilen Redux ile tüm ihtiyaçlarınıza hizmet
            edebilecek çözümler sağlayabilirim.
          </p>
        </div>
      </div>
    </div>
  );
}
