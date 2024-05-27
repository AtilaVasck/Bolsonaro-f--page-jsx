import { Caixa, Flex, Titulo ,Buttons, CaixaGrupo, CaixaDois, Imagem, Dados, Dados1, Dados2, Paragrafo } from "../styles/Box"

// eslint-disable-next-line react/prop-types
const Box = ({tittle, img}) =>{
     return(
          <>
          <Flex>
     <Caixa>
          <CaixaGrupo>
     <Titulo>{tittle}</Titulo>
<Buttons>Explorer</Buttons>
</CaixaGrupo>
<CaixaDois>
     <Imagem src={img} alt="" />
     <div>
          <Dados>+40
          <Paragrafo>milhões de votos</Paragrafo>
          </Dados>
          <Dados1>+30
               <Paragrafo>anos de política</Paragrafo>
          </Dados1>
          <Dados2>38°
<Paragrafo>presidente do Brasil</Paragrafo>

          </Dados2>
     </div>
</CaixaDois>
     </Caixa>
     </Flex>
          </>
     )
     }
     
     export default Box