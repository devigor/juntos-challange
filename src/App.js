import * as Header from './components/Header'

const App = () => (
  <>
    <Header.Container>
      <Header.Wrapper>
        <Header.LogoImage src='https://raw.githubusercontent.com/juntossomosmais/frontend-challenge/master/logo.svg' alt='Esta imagem é a logo da Juntos Somos Mais' />
        <Header.Input placeholder='Buscar aqui' />
        <Header.ButtonGrey />
        <Header.ButtonGrey />
      </Header.Wrapper>
    </Header.Container>
  </>
)

export default App
