import { useEffect, useState } from 'react'

import * as Header from './components/Header'
import * as Body from './components/Body'
import * as Footer from './components/Footer'

const App = () => {

  const [data, setData] = useState([])
  const [error, setError] = useState(false)
  const [states, setStates] = useState([])
  const [name, setName] = useState('')
  const [filter, setFilter] = useState(null)

  useEffect(async () => {
    try {
      /*
       *  Block to make request to api and set the stater or return a error
      */
      // eslint-disable-next-line no-undef
      const request = await fetch('http://localhost:8080/results')
      const response = await request.json()
      setData(response)
      const states = response.map(({ location }) => location.state)
      // Return the states to provider the filter by state
      const statesFilter = states.filter((state, index) => states.indexOf(state) === index)
      setStates(statesFilter)
    } catch {
      setError(true)
    }
  }, [])

  function filterPerson(event) {
    // Save the type event
    const typeEvent = event.type

    if(typeEvent === 'click') {
      const stateCheckName = event.target.id
      const filterByState = data?.filter(({ location }) => location.state === stateCheckName)
      setFilter(filterByState)
    } else {
      // Set name to state
      const nameFilter = event.target.value
      setName(nameFilter)
      const filterByName =
        data?.filter(({ name }) => 
          name.first.search(nameFilter) !== -1 ||
          name.last.search(nameFilter) !== -1)
      setFilter(filterByName)
    }

  }

  return (
  <>
    <Header.Container>
      <Header.Wrapper>

        <Header.LogoImage
          src='https://raw.githubusercontent.com/juntossomosmais/frontend-challenge/master/logo.svg'
          alt='Esta imagem é a logo da Juntos Somos Mais'
        />

        <Header.Input 
          onChange={filterPerson}
          value={name}
          placeholder='Buscar aqui' 
        />
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
                    <Body.CheckBox
                      onClick={filterPerson}
                      name='stateName'
                      id={state}
                      type='radio'
                    />
                    <Body.CheckLabel htmlFor={state}>{state}</Body.CheckLabel>
                  </Body.OptionsBox>
                ) }
              </Body.CheckWrapper>
          </Body.BoxFilter>

          <Body.BoxOrder>
            <Body.OrderWrapper>
              <Body.OrderText>
                { `Exibindo ${!filter ? data?.length : filter?.length} de ${data?.length}` }
              </Body.OrderText>
              <Body.OrderText>Ordenar por: Nome</Body.OrderText>
            </Body.OrderWrapper>
          </Body.BoxOrder>

          <Body.CardWrapper>
            { error && <p>Error ao buscar os dados!</p> }
            { console.log(filter) }
            { !filter ? data.map((info, index) => 
                <Body.CardComponent
                  key={index}
                  image={info.picture.large}
                  firstName={info.name.first}
                  lastName={info.name.last}
                  location={info.location}
                />
              ) 
              :
              filter?.map((info, index) =>
                <Body.CardComponent
                  key={index}
                  image={info.picture.large}
                  firstName={info.name.first}
                  lastName={info.name.last}
                  location={info.location}
                />              
              )
              
            }
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
