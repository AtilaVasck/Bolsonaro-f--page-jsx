import { styled } from "styled-components";

export const Caixa = styled.div`
background-color: gray;
width: 1200px;
height: 600px;
display: flex;
justify-content: center;
border-radius: 10px;
align-items: center;
gap: 40px;
`
export const Flex = styled.main`
display: flex;
justify-content: center;
margin: 70px;
`
export const Buttons = styled.button`
color: white;
background-color: black;
border: none;
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
width: 140px;
height: 55px;
font-weight: 500;
font-family: "Poppins", sans-serif;
border-radius: 30px;
&:hover{
     cursor: pointer;
}
`

export const Titulo = styled.h1`
color: white;
font-family: "Poppins", sans-serif;
font-weight: 800;
font-size: 50px;
`
export const CaixaGrupo = styled.div`
width: 500px;
`
export const CaixaDois = styled.div`
width: 500px;
display: flex;
gap: 40px;
`
export const Imagem = styled.img`
width:400px;
border-radius: 10px;
box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
`
export const Dados = styled.h3`
font-size:40px;
color: white;
font-family: "Poppins", sans-serif;
`
export const Dados1 = styled.h3`
font-size:40px;
color: white;
font-family: "Poppins", sans-serif;
`
export const Dados2 = styled.h3`
font-size:40px;
color: white;
font-family: "Poppins", sans-serif;
`
export const CaixaTres = styled.div`
display: flex;
flex-direction: column;
`

export const Paragrafo = styled.p`
color: white;
font-family: "Poppins", sans-serif;
font-size: 15px;
font-weight: 500;
`

