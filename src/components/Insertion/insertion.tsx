import { Typewriter } from "../Typewriter/typewriter";
import { Container } from "./styles";

export const Insertion = () => {
  return (
    <Container>
      <h1>
        <Typewriter text="Olá, meu nome é" hide />
      </h1>
      <span className="name">
        <Typewriter text="Ruthemberg Rehem." delay={1800} hide />
      </span>
      <span className="dev">
        <Typewriter text="Desenvolvedor Front-End." delay={3400} hide />
      </span>
    </Container>
  );
}
