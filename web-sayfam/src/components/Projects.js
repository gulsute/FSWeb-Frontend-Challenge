import "./projects.css";

export default function Projects() {
  return (
    <div className="projectsbox" class="my-8">
      <h2 class="pb-8 dark:text-[#AEBCCF]">Projeler</h2>
      <div className="projects">
        <div className="project">
          <div className="projectimg">
            <img src="./proje1-nasa.png" alt="image" />
          </div>
          <h3 class="dark:text-[#B7AAFF]">Nasa </h3>
          <p class="dark:text-[#FFFFFF]">
            Bir arkadaşınız, ailenizden biri veya parteriniz olabilir! Mutlaka
            uzaya çok meraklı ve uzay görsellerine bayılan bir yakınınız vardır.
            İşte onlarla paylaşabileceğiniz bir proje.
          </p>
          <span class="dark:bg-[#383838] dark:text-[#8F88FF] dark:border-[#8F88FF]">
            react
          </span>
          <span class="dark:bg-[#383838] dark:text-[#8F88FF] dark:border-[#8F88FF]">
            axios
          </span>
          <div className="projectlinks">
            <a
              class="dark:text-[#E1E1FF]"
              href="https://github.com/gulsute/FSWeb-S6G3-Nasa"
            >
              Github
            </a>
            <a class="dark:text-[#E1E1FF]" href="https://dailynasa.vercel.app/">
              Siteye Git
            </a>
          </div>
        </div>
        <div className="project">
          <div className="projectimg">
            <img src="./proje2-bored.png" alt="image" />
          </div>
          <h3 class="dark:text-[#B7AAFF]">Are You Bored?</h3>
          <p class="dark:text-[#FFFFFF]">
            Hepimizin içinden bir şey gelmediği ve bu durumlarda ne yapacağını
            bilemediği anlar olmuştur. Hiç merak etmeyin ve bu websitesine
            girerek size önerilerde bulunmasına izin verin!
          </p>
          <span class="dark:bg-[#383838] dark:text-[#8F88FF] dark:border-[#8F88FF]">
            react
          </span>
          <span class="dark:bg-[#383838] dark:text-[#8F88FF] dark:border-[#8F88FF]">
            axios
          </span>
          <span class="dark:bg-[#383838] dark:text-[#8F88FF] dark:border-[#8F88FF]">
            toastify
          </span>
          <div className="projectlinks">
            <a
              class="dark:text-[#E1E1FF]"
              href="https://github.com/gulsute/fsweb-s10g4-thunk-and-apis"
            >
              Github
            </a>
            <a class="dark:text-[#E1E1FF]" href="https://r-u-bored.vercel.app/">
              Siteye Git
            </a>
          </div>
        </div>
        <div className="project">
          <div className="projectimg">
            <img src="./proje3-minnet.png" alt="image" />
          </div>
          <h3 class="dark:text-[#B7AAFF]">Minnet Günlüğü</h3>
          <p class="dark:text-[#FFFFFF]">
            Zaman zaman hayatta çok büyük mutluluklar yaşarız ve bunları
            unutmayız anccak hatırlanması gereken küçük mutlu anlar için
            tasarlanmış bir proje. Teknoloji çağında pratiklik sağlayan bu
            uygulamanın hayatınızın birçok noktasına değineceğine eminim.
          </p>
          <span class="dark:bg-[#383838] dark:text-[#8F88FF] dark:border-[#8F88FF]">
            react
          </span>
          <span class="dark:bg-[#383838] dark:text-[#8F88FF] dark:border-[#8F88FF]">
            redux
          </span>
          <span class="dark:bg-[#383838] dark:text-[#8F88FF] dark:border-[#8F88FF]">
            toastify
          </span>
          <div className="projectlinks">
            <a
              class="dark:text-[#E1E1FF]"
              href="https://github.com/gulsute/fsweb-s10-challenge"
            >
              Github
            </a>
            <a
              class="dark:text-[#E1E1FF]"
              href="https://minnetlerim.vercel.app/"
            >
              Siteye Git
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
