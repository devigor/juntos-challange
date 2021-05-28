import * as Header from './components/Header'
import * as Body from './components/Body'

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

    <Body.Container>
      <Body.Wrapper>
        <Body.SpanPath>Home {`>`} Usuários {`>`} Detalhes</Body.SpanPath>
        <Body.Title>Lista de Membros</Body.Title>

        <Body.Grid>
          <Body.BoxFilter>
            <Body.FilterTitle>Por Estado</Body.FilterTitle>
            <Body.OptionsBox>
              <Body.CheckBox id='check' type='checkbox' />
              <Body.CheckLabel htmlFor='check'>São Paulo</Body.CheckLabel>
            </Body.OptionsBox>
          </Body.BoxFilter>

          <Body.BoxOrder>
            <Body.OrderWrapper>
              <Body.OrderText>Exibindo 9 de 25 itens</Body.OrderText>
              <Body.OrderText>Ordenar por: Nome</Body.OrderText>
            </Body.OrderWrapper>
          </Body.BoxOrder>

          <Body.CardWrapper>
            <Body.CardBox>
              <Body.CardInside>
                <Body.CardImage />
                <Body.CardName>Joselino Alves</Body.CardName>
                <Body.CardStreet>Rua Espirito Santo, 2096</Body.CardStreet>
                <Body.CardAddress>
                  São José de Ribamar
                  Paraná - CEP: 96895
                </Body.CardAddress>
              </Body.CardInside>
            </Body.CardBox>
            <Body.CardBox>
              <Body.CardInside>
                <Body.CardImage />
                <Body.CardName>Joselino Alves</Body.CardName>
                <Body.CardStreet>Rua Espirito Santo, 2096</Body.CardStreet>
                <Body.CardAddress>
                  São José de Ribamar
                  Paraná - CEP: 96895
                </Body.CardAddress>
              </Body.CardInside>
            </Body.CardBox>
            <Body.CardBox>
              <Body.CardInside>
                <Body.CardImage />
                <Body.CardName>Joselino Alves</Body.CardName>
                <Body.CardStreet>Rua Espirito Santo, 2096</Body.CardStreet>
                <Body.CardAddress>
                  São José de Ribamar
                  Paraná - CEP: 96895
                </Body.CardAddress>
              </Body.CardInside>
            </Body.CardBox>
            <Body.CardBox>
              <Body.CardInside>
                <Body.CardImage />
                <Body.CardName>Joselino Alves</Body.CardName>
                <Body.CardStreet>Rua Espirito Santo, 2096</Body.CardStreet>
                <Body.CardAddress>
                  São José de Ribamar
                  Paraná - CEP: 96895
                </Body.CardAddress>
              </Body.CardInside>
            </Body.CardBox>
          </Body.CardWrapper>
        </Body.Grid>
      </Body.Wrapper>
    </Body.Container>
  </>
)

export default App
