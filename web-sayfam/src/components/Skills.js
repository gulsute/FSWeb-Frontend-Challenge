import "./skills.css";

export default function Skills() {
  return (
    <div className="skillsbox" class="my-8">
      <h2 class=" dark:text-[#AEBCCF]">Yetenekler</h2>
      <div className="skills">
        <div className="skill">
          <h3 class=" dark:text-[#B7AAFF]">Javascript</h3>
          <p class=" dark:text-[#FFFFFF]">
            Websiteleriniz ve uygulamalarınızda ihtiyacınız olacak algoritma
            kurulumunu pratik çözümler ve doğru sonuçlar için kullanabilirim.
          </p>
        </div>
        <div className="skill">
          <h3 class=" dark:text-[#B7AAFF]">CSS</h3>
          <p class="dark:text-[#FFFFFF]">
            Tasarım mükemmelliğini doğru gözle birleştirerek kullanıcılar için
            kolaylığı ve fonksiyonelliği bir arada sunabilirim.
          </p>
        </div>
        <div className="skill">
          <h3 class=" dark:text-[#B7AAFF]">Redux</h3>
          <p class=" dark:text-[#FFFFFF]">
            Son yılların gözde yazılım dili olan React ve fonksiyonelliği
            artırılarak elde edilen Redux ile tüm ihtiyaçlarınıza hizmet
            edebilecek çözümler sağlayabilirim.
          </p>
        </div>
      </div>
    </div>
  );
}
