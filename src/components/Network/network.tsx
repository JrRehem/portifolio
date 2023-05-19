import { BsGithub as Git } from 'react-icons/bs'
import { GrLinkedinOption as Linkedin } from 'react-icons/gr'
import { Container } from './styles';


export const Network = () => {
  return (
    <Container>
      <Git className='git'/>
      <div className='bottom'>
        <Linkedin />
      </div>
      <div className='line' />
    </Container>
  );
}
