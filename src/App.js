import { useEffect, useState } from 'react'

import * as Header from './components/Header'
import * as Body from './components/Body'
import * as Footer from './components/Footer'

const App = () => {

  const [data, setData] = useState(null)
  const [states, setStates] = useState(null)
  const [filterState, setFilterState] = useState(null)

  useEffect(async () => {
    // eslint-disable-next-line no-undef
    const request = await fetch('http://localhost:8080/results')
    const response = await request.json()
    setData(response)

    const states = response.map(({ location }) => location.state)
    // Return the states to provider the filter by state
    const statesFilter = states.filter((state, index) => states.indexOf(state) === index)
    setStates(statesFilter)

  }, [])

  function filterByState(e) {
    const stateClick = e.target.id
    const filter = data?.filter(info => info.location.state === stateClick)
    setFilterState(filter)
  }

  return (
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
              <Body.CheckWrapper>
                { states?.map((state, index) =>
                  <Body.OptionsBox key={index}>
                    <Body.CheckBox onClick={filterByState} name='stateName' id={state} type='radio' />
                    <Body.CheckLabel htmlFor={state}>{state}</Body.CheckLabel>
                  </Body.OptionsBox>
                ) }
              </Body.CheckWrapper>
          </Body.BoxFilter>

          <Body.BoxOrder>
            <Body.OrderWrapper>
              <Body.OrderText>
                Exibindo { filterState?.length || data?.length } de { filterState?.length || data?.length }
              </Body.OrderText>
              <Body.OrderText>Ordenar por: Nome</Body.OrderText>
            </Body.OrderWrapper>
          </Body.BoxOrder>

          <Body.CardWrapper>
            { filterState ? filterState.map((info, index) => 
              <Body.CardBox key={index}>
                <Body.CardInside>
                  <Body.CardImage src={info.picture.large} />
                  <Body.CardName>{ info.name.first } { info.name.last }</Body.CardName>
                  <Body.CardStreet>
                    { `${info.location.street.slice(5)}, ${info.location.street.slice(0, 5)}` }
                  </Body.CardStreet>
                  <Body.CardAddress>
                    {
                      `${info.location.city} ${info.location.state}
                      CEP: ${info.location.postcode}`
                    }
                  </Body.CardAddress>
                </Body.CardInside>
              </Body.CardBox>
            )       
            
            : data?.map((info, index) =>
              <Body.CardBox key={index}>
                <Body.CardInside>
                  <Body.CardImage src={info.picture.large} />
                  <Body.CardName>{ info.name.first } { info.name.last }</Body.CardName>
                  <Body.CardStreet>
                    { `${info.location.street.slice(5)}, ${info.location.street.slice(0, 5)}` }
                  </Body.CardStreet>
                  <Body.CardAddress>
                    {
                      `${info.location.city} ${info.location.state}
                      CEP: ${info.location.postcode}`
                    }
                  </Body.CardAddress>
                </Body.CardInside>
              </Body.CardBox>
            )}
          </Body.CardWrapper>
        </Body.Grid>
      </Body.Wrapper>
    </Body.Container>

    <Footer.Wrapper>
      <Footer.LogoJuntos src='/assets/imgs/Logo.svg' alt='Logo Juntos Somos Mais branco' />
      <Footer.SubTitle>
        Juntos Somos Mais Fidelização S.A.
      </Footer.SubTitle>
      <Footer.SocialTitle>
        Siga-nos nas redes sociais:
      </Footer.SocialTitle>
      <Footer.SocialWrapper>
        <Footer.SocialImg src='/assets/imgs/Facebook.svg' alt='Logo Facebook' />
        <Footer.SocialImg src='/assets/imgs/LinkedIn.svg' alt='Logo Linkedin' />
        <Footer.SocialImg src='/assets/imgs/Instagram.svg' alt='Logo Instagram' />
      </Footer.SocialWrapper>
    </Footer.Wrapper>
  </>
  )
}

export default App
