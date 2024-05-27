import {Cabeca, Logo, Lista, Buttons, Paragraph} from '../styles/Cabeca'

// eslint-disable-next-line react/prop-types
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