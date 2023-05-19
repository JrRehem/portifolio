import { SiTypescript } from 'react-icons/si'
import { IoLogoJavascript } from 'react-icons/io'
import { AiFillHtml5 } from 'react-icons/ai'
import { DiSass } from 'react-icons/di'
import { FaReact } from 'react-icons/fa'
import { SiNextdotjs } from 'react-icons/si'
import { FaNodeJs } from 'react-icons/fa'
import { SiStyledcomponents } from 'react-icons/si'

import Image from "next/image";
import Student from '../../assets/student.svg'
import { Container, Tooling, ToolingSkill } from "./style";

export const Skill = () => {
  return (
    <Container>
      <h1><span>.</span>Ferramentas</h1>
      <Tooling>
        <Image src={Student} alt="" />
        <ToolingSkill>
          <div>
            <span>Typescript <SiTypescript /></span>
          </div>
          <div>
            <span>JavaScript <IoLogoJavascript /></span>
          </div>
          <div>
            <span>HTML <AiFillHtml5 /></span>
          </div>
          <div>
            <span>Sass  <DiSass /></span>
          </div>
          <div>
            <span>React <FaReact /></span>
          </div>
          <div>
            <span>Next.js  <SiNextdotjs /></span>
          </div>
          <div>
            <span>Node.js <FaNodeJs /></span>
          </div>
          <div>
            <span>Styled Component <SiStyledcomponents /></span>
          </div>
        </ToolingSkill>
      </Tooling>
    </Container>
  );
}
