import {Cabeca, Logo, Lista, Buttons, Paragraph} from '../styles/Cabeca'

const Header = ({logo, sobre, autor}) =>{
return (
     <Cabeca>
          <Logo>{logo}</Logo>
          <Lista>
               <Paragraph>{sobre}</Paragraph>
               <Paragraph>{autor}</Paragraph>
          </Lista>
          <Buttons>Sing up</Buttons>
     </Cabeca>
)
}

export default Header