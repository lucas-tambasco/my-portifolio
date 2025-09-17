import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Sistema de Investimento Java do Tio Patinhas",
    description:
      "Um sistema de controle de investimentos que fiz para um trabalho da faculdade feito com java e banco de dados",
    image: "Ainda em criação da interface",
    tags: ["Java", "Orientação a Objetos", "SQL"],
    demoUrl: "#",
    githubUrl:
      "https://github.com/lucas-tambasco/Atividade-Fiap-Tio-Patinhas-fase-7",
  },
  {
    id: 2,
    title: "Sistema de Investimento Java do Tio Patinhas",
    description:
      "Um sistema de controle de investimentos que fiz para um trabalho da faculdade feito com java e banco de dados",
    image: "Ainda em criação da interface",
    tags: ["Java", "Orientação a Objetos", "SQL"],
    demoUrl: "#",
    githubUrl:
      "https://github.com/lucas-tambasco/Atividade-Fiap-Tio-Patinhas-fase-7",
  },
  {
    id: 3,
    title: "Sistema de Investimento Java do Tio Patinhas",
    description:
      "Um sistema de controle de investimentos que fiz para um trabalho da faculdade feito com java e banco de dados",
    image: "Ainda em criação da interface",
    tags: ["Java", "Orientação a Objetos", "SQL"],
    demoUrl: "#",
    githubUrl:
      "https://github.com/lucas-tambasco/Atividade-Fiap-Tio-Patinhas-fase-7",
  },
];

export const ProjectSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text=3xl md:text-4xl font-bold mb-4 text-center">
          Principais<span className="text-primary"> Projetos</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-2-2xl">
          Aqui estão alguns dos meus projetos recentes.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border-1 border-primary bg-primary-10 rounded-full text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold pb-3">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex juntify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-cente mt-12">
          <a
            href="https://github.com/lucas-tambasco"
            target="_blank"
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
          >
            Check My GitHub <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
