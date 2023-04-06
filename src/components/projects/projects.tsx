import Image from "next/image";
import { BsGlobe as Globe } from 'react-icons/bs';
import { AiOutlineGithub as Git } from 'react-icons/ai'

import ImageProject from '../../assets/projeto.png'
import { Container, Task, Summary, Project } from "./styles";


export const Projects = () => {
  return (
    <Container>
      <h1 id="project"><span>.</span>Projetos</h1>

      <Task>
        <Summary>
          <span>Projeto</span>
          <div className="item">
            <div className="item__project">
              <p>Acreditamos que a arquitetura tem um papel importante na relação entre as pessoas e o espaço habitado, e que através dela é possível transformar e ressignificar espaços podendo inclusive despertar o lado sensorial das pessoas!</p>
            </div>
          </div>
          <div className="icon">
            <a href="#">
              <Git className="icons" />
            </a>
            <a href="#">
              <Globe className="icons" />
            </a>
          </div>
        </Summary>

        <Project>
          <div className="project__dev">
            <div className="position"></div>
            <Image src={ImageProject} alt={"Projeto"} width={530} height={350} />
          </div>
        </Project>
      </Task>
    </Container>
  );
}
