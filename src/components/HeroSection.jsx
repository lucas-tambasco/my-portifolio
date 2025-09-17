import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6 flex justify-center">
          <img
            src="Perfil.jpg"
            alt="Foto de perfil"
            className="w-60 h-60 object-cover border-4 border-primary rounded-full transition-transform duration-500 mb-5 card-hove animate-fade-in"
          />
        </div>
        <div className="space-y-6">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in">Hi, I'm</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {" "}
              Lucas
            </span>
            <span className="text-gradiant ml-2 opacity-0 animate-fade-in-delay-2">
              {" "}
              Tambasco
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            Sou Engenheiro de Software especialista em back-end com Java, mas
            também apaixonado por front-end com React. Busco unir performance e
            boas práticas com interfaces modernas e funcionais. Proativo,
            dedicado e comunicativo, gosto de trabalhar em equipe para criar
            soluções completas e eficientes.
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              Veja Meus Projetos
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
