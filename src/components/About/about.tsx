import Image from 'next/image';
import Perfil from '../../assets/perfil.png'
import { Container, Profile, AboutMe } from './styles';

export const About = () => {
  return (
    <Container>
      <Profile>
        <div className='border__color'>
          <div className='circle'>
            <Image src={Perfil} alt={'Perfil'} width={200} height={200} />
          </div>
        </div>
      </Profile>

      <AboutMe>
        <h1 id='about'><span>.</span>Sobre Mim</h1>
        <p>
          Olá, meu nome é Ruthemberg, também conhecido como Ruthem.
          Sou Desenvolvedor Front-end e Analista de sistemas.
          Meu gosto por programação começou com a robótica
        </p>
      </AboutMe>
    </Container>
  );
}
