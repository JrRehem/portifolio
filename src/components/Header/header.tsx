import NavLink from '../NavLink/navLink';
import { Container } from './styles';

export const Header = () => {
  return (
    <Container>
      <ul>
        <NavLink title="Home" path="/" />
        <NavLink title="Sobre" path="/#about" includes/>
        <NavLink title="Projetos" path="/#project" includes />
        <NavLink title="Contatos" path="/contact" includes />
      </ul>
    </Container>
  );
}
