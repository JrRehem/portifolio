import { ActiveLink } from './activeLink';
import { Container } from './styles';

export const Header = () => {
  return (
    <Container>
      <nav>
        <ul>
          <li>
            <ActiveLink activeClassName="active" href="/">
              <a>Home</a>
            </ActiveLink>
          </li>
          <li>
            <ActiveLink activeClassName="active" href="/#about">
              <a>Sobre</a>
            </ActiveLink>
          </li>
          <li>
            <ActiveLink activeClassName="active" href="/#project">
              <a>Projetos</a>
            </ActiveLink>
          </li>
          <li>
            <ActiveLink activeClassName="active" href="/#contact">
              <a>Contato</a>
            </ActiveLink>
          </li>
        </ul>
      </nav>
    </Container>
  );
}
