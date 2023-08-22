import "./projects.css";

export default function Projects() {
  return (
    <div className="projectsbox" class="my-8">
      <h2>Projects</h2>
      <div className="projects">
        <div className="project">
          <img src="./proje1-nasa.png" alt="image" />
          <h3>Nasa </h3>
          <p>
            Lorem ipsum dolor sit amet. Nam molestias quas ex iusto ipsa est
            iste commodi vel placeat placeat hic assumenda dicta.
          </p>
        </div>
        <div className="project">
          <img src="./proje2-bored.png" alt="image" />
          <h3>Are You Bored?</h3>
          <p>
            Lorem ipsum dolor sit amet. Nam molestias quas ex iusto ipsa est
            iste commodi vel placeat placeat hic assumenda dicta.
          </p>
        </div>
        <div className="project">
          <img src="./proje3-temsili.jpg" alt="image" />
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
