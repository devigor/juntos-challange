/* eslint-disable react/prop-types */
import { Container, Wrapper } from './Wrapper'
import { LogoImage } from './Logo'
import { Input } from './Input'
import { ButtonGrey } from './ButtonGrey'


export const Header = ({ filterPerson, value }) => (
  <Container>
      <Wrapper>

        <LogoImage
          src='https://raw.githubusercontent.com/juntossomosmais/frontend-challenge/master/logo.svg'
          alt='Esta imagem é a logo da Juntos Somos Mais'
        />

        <Input 
          onChange={filterPerson}
          value={value}
          placeholder='Buscar aqui' 
        />
        <ButtonGrey />
        <ButtonGrey />
      </Wrapper>
    </Container>
)