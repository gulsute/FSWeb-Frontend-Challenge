import "./projects.css";

export default function Projects() {
  return (
    <div className="projectsbox" class="my-8">
      <h2 class="pb-8">Projeler</h2>
      <div className="projects">
        <div className="project">
          <div className="projectimg">
            <img src="./proje1-nasa.png" alt="image" />
          </div>
          <h3>Nasa </h3>
          <p>
            Bir arkadaşınız, ailenizden biri veya parteriniz olabilir! Mutlaka
            uzaya çok meraklı ve uzay görsellerine bayılan bir yakınınız vardır.
            İşte onlarla paylaşabileceğiniz bir proje.
          </p>
        </div>
        <div className="project">
          <div className="projectimg">
            <img src="./proje2-bored.png" alt="image" />
          </div>
          <h3>Are You Bored?</h3>
          <p>
            Hepimizin içinden bir şey gelmediği ve bu durumlarda ne yapacağını
            bilemediği anlar olmuştur. Hiç merak etmeyin ve bu websitesine
            girerek size önerilerde bulunmasına izin verin!
          </p>
        </div>
        <div className="project">
          <div className="projectimg">
            <img src="./proje3-temsili.jpg" alt="image" />
          </div>
          <h3>Project 3</h3>
          <p>
            Lorem ipsum dolor sit amet. Nam molestias quas ex iusto ipsa est
            iste commodi vel placeat placeat hic assumenda dicta.
          </p>
        </div>
      </div>
    </div>
  );
}
